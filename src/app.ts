import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
const bp = require("body-parser");

import { Pool } from "pg";
import mails from "./mailsText";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export const createDirectories = `CREATE TABLE IF NOT EXISTS
directories(
    id SERIAL PRIMARY KEY,
    name text,
    iscustom boolean
);`;

export const createMails = `CREATE TABLE IF NOT EXISTS
mails(
    id SERIAL,
    author text,
    createdAt text,
    directory INTEGER REFERENCES Directories (Id) ON DELETE CASCADE,
    text text,
    title text
);`;

async function migrationCreateMailsTable() {
  const client = await pool.connect();
  await client.query(createMails);
}

async function migrationCreateDirectoriesTable() {
  const client = await pool.connect();
  await client.query(createDirectories);
}

async function addStandartDirectories() {
  const query1 = `INSERT INTO directories(name, iscustom)  
 SELECT 'Входящие', false
WHERE NOT EXISTS (
 SELECT 1 FROM directories WHERE name='Входящие' AND iscustom=false
);`;

  const query2 = `INSERT INTO directories(name, iscustom)  
SELECT 'Отправленные', false
WHERE NOT EXISTS (
SELECT 1 FROM directories WHERE name='Отправленные' AND iscustom=false
);`;

  const query3 = `INSERT INTO directories(name, iscustom)  
SELECT 'Черновики', false
WHERE NOT EXISTS (
SELECT 1 FROM directories WHERE name='Черновики' AND iscustom=false
);`;

  const query4 = `INSERT INTO directories(name, iscustom)  
SELECT 'Удаленные', false
WHERE NOT EXISTS (
SELECT 1 FROM directories WHERE name='Удаленные' AND iscustom=false
);`;

  const query5 = `INSERT INTO directories(name, iscustom)  
SELECT 'Спам', false
WHERE NOT EXISTS (
SELECT 1 FROM directories WHERE name='Спам' AND iscustom=false
);`;

  await pool.query(query1);
  await pool.query(query2);
  await pool.query(query3);
  await pool.query(query4);
  await pool.query(query5);
}

async function populateMailsFromText() {
  async function insertMail(query1: string) {
    // const client = await pool.connect();
    await pool.query(query1),
      (error: any, results: any) => {
        if (error) {
          throw error;
        }
      };
  }

  for await (const mail of mails) {
    const query1 = `INSERT INTO mails(author, createdAt, directory, text, title) SELECT '${mail.author}', '${mail.createdAt}', '${mail.defaultDirectoryId}', '${mail.text}', '${mail.title}' WHERE NOT EXISTS (
      SELECT 1 FROM mails WHERE author='${mail.author}' AND text='${mail.text}'
        )`;
    await insertMail(query1);
  }
}

async function migrations() {
  let r1 = await migrationCreateDirectoriesTable();
  let r2 = await migrationCreateMailsTable();
  let r3 = await addStandartDirectories();
  let r4 = await populateMailsFromText();
}

migrations();

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post(
  "/getmailsbydirectory",
  function (req: express.Request, res: express.Response) {
    const id = req.body.id;
    console.log(id);
    pool.query(
      "SELECT * FROM mails WHERE directory = $1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log("rows:" + results.rows);
        console.log(results.rows.length);
        // if (results.rowCount > 0) {
        res.status(200).json(results.rows);
        //  } else {
        //  res.status(200).json([]);
        //  }
      }
    );
  }
);

app.post(
  "/changemailsdirectory",
  function (req: express.Request, res: express.Response) {
    const { mailIdArray, directoryId } = req.body;
    makeRequest(mailIdArray, directoryId).then(() => res.status(200).json([]));
  }
);

async function makeRequest(mailIdArray: number[], directoryId: number) {
  for await (const mail of mailIdArray) {
    await pool.query("UPDATE mails SET directory=$1 WHERE id=$2", [
      directoryId,
      mail,
    ]);
  }
}

app.get(
  "/getdirectorieslist",
  function (req: express.Request, res: express.Response) {
    pool.query("SELECT * FROM directories", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  }
);

app.post(
  "/searchmails",
  function (req: express.Request, res: express.Response) {
    const searchQuery = req.body.searchQuery;
    pool.query(
      `
      select * from mails where text like '%${searchQuery}%'
union
select * from mails where  author like '%${searchQuery}%'
union
select * from mails where  title like '%${searchQuery}%%';
      `,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
);

app.post(
  "/createcustomdirectory",
  function (req: express.Request, res: express.Response) {
    const directoryName = req.body.directoryname;

    pool.query(
      "INSERT INTO directories(name, iscustom) VALUES ($1, $2)",
      [directoryName, true],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
);

app.post(
  "/changecustomdirectory",
  function (req: express.Request, res: express.Response) {
    const { directoryname, id } = req.body;

    pool.query(
      "UPDATE directories SET name=$1 WHERE id=$2",
      [directoryname, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
);

app.post(
  "/deletecustomdirectory",
  function (req: express.Request, res: express.Response) {
    const { id } = req.body;
    pool.query(
      "DELETE from directories WHERE id=$1",
      [id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
