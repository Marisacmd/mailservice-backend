const mails: any[] = [
  {
    author: "Читай-город",
    createdAt: "16.05.2023",
    defaultDirectoryId: 1,
    text: "Мы подготовили для вас подарок – скидку 26% на книги в нашем интернет-магазине. Но для того, чтобы её получить, нужно побыть Нео из фильма «Матрица», а именно – сделать выбор. Решайте, что нравится вам больше: НОН-ФИКШН или ХУДОЖКА. Это два промокода, один из которых вы можете активировать при оформлении заказа. Только успейте сделать покупку до 2 апреля, пока действует акция. Если захотите узнать, что выбрали другие книголюбы, подпишитесь на нас в Telegram, ВКонтакте и Одноклассниках. Там мы подведём итоги голосования",
    title: "Сделать выбор = поймать скидку 26%",
  },
  {
    author: "Галамарт",
    createdAt: "05.12.2022",
    defaultDirectoryId: 2,
    text: "Тамара, здравствуйте! Уже привыкли, что 1 апреля никому нельзя верить и готовитесь к куче дурацких розыгрышей? «Галамарт» поможет сломать стереотип об этом празднике своей подборкой товаров. Покажем, что разыгрывать можно так, чтобы весело было всем.",
    title: "Давайте смеяться вместе",
  },
  {
    author: "ЛОкситан",
    createdAt: "16.05.2022",
    defaultDirectoryId: 1,
    text: "Большой формат в подарок СКРАБ ДЛЯ ДУША МИНДАЛЬ 200 МЛ В ПОДАРОК! При покупке от 8 000 ₽ с 30 марта по 5 апреля Эксклюзивно в интернет-магазине Лидер по дифирамбам в интернете и незабываемым впечатлениям в ванной — он льётся из бутылки подобно жёлтому золоту, чтобы превратиться на влажной коже в невесомое молочко. Если по какой-то неведомой причине вы всё ещё не знакомы, то искренне завидуем — первый раз с ним остаётся в памяти навсегда. Бережное очищение, непревзойдённый комфорт, объятия вместо пены, аппетитный аромат и самая бархатистая кожа, которую вы когда-либо видели и трогали",
    title: "Подарок ждет Вас! При покупке только в интернет-магазине!",
  },
  {
    author: "Яндекс Путешествия",
    createdAt: "01.02.2022",
    defaultDirectoryId: 1,
    text: "Куда поехать на майские? Вариантов — море, как у моря, так и вдали от него. Достаточно лишь забронировать отели на два подряд уикенда и купить билеты. И всё, можно отдыхать! Официальные выходные выделены красным цветом Собрали места, куда любят путешествовать на майские наши пользователи Сочи авиабилеты  жд билеты Санкт-Петербург авиабилеты  жд билеты Калининград авиабилеты  жд билеты Москва авиабилеты  жд билеты Стамбул авиабилеты Ташкент авиабилеты",
    title: "Давайте решать, что же делать на майских",
  },
  {
    author: "УБРиР",
    createdAt: "04.02.2023",
    defaultDirectoryId: 1,
    text: "Вклады в банках надёжно застрахованы Вложить все сбережения и получить через год в 3, а то и в 10 раз больше – заманчиво, не правда ли? Получить такой результат сложно, если не являешься профессиональным трейдером. Вместо заработка можно даже уйти в минус. Самым надёжным видом пассивного заработка считается вклад, и мы расскажем почему. ​​​​​​Агентство по страхованию вкладов (АСВ) обеспечивает сохранность банковских вкладов и негосударственных пенсионных фондов. Банки, которые привлекают средства частных лиц, платят взносы в Фонд обязательного страхования вкладов (ФОСВ). Из этого фонда и выплачивается страховое возмещение при наступлении страхового случая. Застрахованы не только вклады, но именные счета: дебетовые карты, накопительные и эскроу счета. Проверить банк на наличие страховки можно на сайте Банка России. ​​​​​​​Сумма возмещения по страховке - до 1,4 млн ₽ включительно, поэтому при большей сумме накоплений их лучше хранить в разных банках.",
    title:
      "Тамара, почему вклады в банках - самый надёжный способ сохранить деньги?",
  },
  {
    author: "Вы",
    createdAt: "02.03.2023",
    defaultDirectoryId: 2,
    text: "Здравствуйте, хотелось бы подробнее узнать о вакансии",
    title: "Работа",
  },
  {
    author: "Вы",
    createdAt: "31.12.2022",
    defaultDirectoryId: 2,
    text: "У",
    title: "С Новым годом",
  },
  {
    author: "Вы",
    createdAt: "01.01.2022",
    defaultDirectoryId: 3,
    text: "wqwswqswqqws",
    title: "цыывццйвц",
  },
  {
    author: "Вы",
    createdAt: "15.12.2021",
    defaultDirectoryId: 2,
    text: "Трек номер 62006379001570",
    title: "dd",
  },
  {
    author: "Malcolm @ nichesss malcolm@nichesss.com",
    createdAt: "17.09.2022",
    defaultDirectoryId: 5,
    text: "Its your last chance! This is just a gentle reminder that only 1 hour remains on our lifetime deal. If you are liking nichesss and the copy it generates, that is your last chance to get the deal before we shut it down. Get lifetime access for $59, one-time All the similar tools on the market cost upwards of $99month to use. We give you what they give you, and more, for just a simple one-time purchase of $59. Think about all the time you will save when it comes to writing blog posts, Facebook and Google Ads, Instagram and Twitter posts and more. Your clients wont even be able to tell the difference. Click here to get the deal before its gone and save over $1000+ each and every year! -Malcolm CEO & Founder nichesss",
    title: "AI Copywriting Deal - 1 hour left",
  },
  {
    author: "Бакаре Тунде",
    createdAt: "15.08.2022",
    defaultDirectoryId: 5,
    text: "Меня зовут Бакаре Тунде, я брат первого нигерийского космонавта, майора ВВС Нигерии Абака Тунде. Мой брат стал первым африканским космонавтом, который отправился с секретной миссией на советскую станцию «Салют-6» в далеком 1979 году. Позднее он принял участие в полете советского «Союза Т-16З» к секретной советской космической станции «Салют-8Т». В 1990 году, когда СССР пал, он как раз находился на станции. Все русские члены команды сумели вернуться на землю, однако моему брату не хватило в корабле места. С тех пор и до сегодняшнего дня он вынужден находиться на орбите, и лишь редкие грузовые корабли «Прогресс» снабжают его необходимым. Несмотря ни на что, мой брат не теряет присутствия духа, однако жаждет вернуться домой, в родную Нигерию. За те долгие годы, что он провел в космосе, его постепенно накапливающаяся заработная плата составила 15 000 000 американских долларов. В настоящий момент данная сумма хранится в банке в Лагосе. Если нам удастся получить доступ к деньгам, мы сможем оплатить Роскосмосу требуемую сумму и организовать для моего брата рейс на Землю. Запрашиваемая Роскосмосом сумма равняется 3 000 000 американских долларов. Однако для получения суммы нам необходима ваша помощь, поскольку нам, нигерийским госслужащим, запрещены все операции с иностранными счетами. Вечно ваш, доктор Бакаре Тунде, ведущий специалист по астронавтике",
    title: "Необходима ваша помощь",
  },
  {
    author: "RU-CENTER",
    createdAt: "01.01.2021",
    defaultDirectoryId: 4,
    text: "Здравствуйте, Попытка автоматически перечислить со счета в VisaMasterCard 528.00 руб. на личный счет договора 4124362NIC-D с помощью сервиса Автоплатеж не удалась. Платеж может быть неудачным по следующим причинам: - На счету недостаточно средств - Счет заблокирован - Ошибка платежной системы Проверьте, пожалуйста, Ваш счет в VisaMasterCard. Вы также можете пополнить личный счет Вашего договора 4124362NIC-D вручную обычным способом (https:www.nic.rumanagerpayment.cgi). -- С уважением, Департамент по работе с клиентами RU-CENTER Group https:www.nic.ruhelp ----------------------------- english ------------------------- Dear SirMadam, The attempt for automatic transfer of funds from account in VisaMasterCard  in amount of 528.00 rub to the personal account under 4124362NIC-D using Automatic payment service failed. The payment failed due to the following possible reasons: - Insufficient funds on account to cover the service. - The account is blocked - Plat system error Please, verify your account in VisaMasterCard. You may also renew personal account of your agreement 4124362NIC-D manually in a usual way (https:www.nic.ruenmanagerpayment.cgi). -- Best regards, RU-CENTER Group Customer Service http:www.nic.ruen",
    title: "Автоплатеж по договору 4124362NIC-D с VisaMasterCard не удался",
  },
  {
    author: "Команда Selectel ",
    createdAt: "01.01.2021",
    text: "В следующий четверг — 6 апреля — мы проведем лекцию с Андреем Аксеновым — автором подкастов «Закат Империи» и «Время и деньги». Регистрируйтесь, чтобы услышать эксклюзивную историю, которой нет в подкасте «Закат империи», задать вопросы и пообщаться с автором в режиме реального времени.",
    defaultDirectoryId: 4,
    title: "«Закат империи» в Selectel. Лекция 6 апреля",
  },
  {
    author: "Binance",
    createdAt: "12.12.2020",
    defaultDirectoryId: 4,
    text: "Верифицируйте аккаунт и получите ваучер на ребейт торговой комиссии на сумму 50 USDT. Чтобы получить вознаграждение, выполните два простых шага Шаг 1. Пройдите верификацию. Шаг 2. Перейдите в Центр наград в приложении или на сайте Binance и получите ваучер. Примечание — У вас будет семь дней на выполнение задания с момента его получения. — Затем у вас будет 10 дней на получение ваучера. Запросите его, и соответствующая сумма будет действительная в течение 10 дней. — Как только вы активируете ваучер, его номинальная стоимость будет вычтена из оплаченных торговых комиссий.",
    title:
      "Пройдите верификацию и получите ваучер на ребейт торговой комиссии!",
  },
];

export default mails;
