
import gerb from "./assets/img/gerb.svg";
import cut from "./assets/img/cut.svg";
import res from "./assets/img/res.svg";
import image from "./assets/img/image.png";
import com from "./assets/img/com.png";
import pic from "./assets/img/pic.png";
import loc from "./assets/img/loc.png";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import line1 from "./assets/img/1.png";
import line2 from "./assets/img/2.png";
import line3 from "./assets/img/3.png";

const Keylogger = () => {

   const steps = [
    {
      number: 1,
      title: "РЕГИСТРАЦИЯ",
      text: "Вы регистрируетесь на портале создавая личный кабинет с указанием телефона, email и пароля."
    },
    {
      number: 2,
      title: "ПОДАЧА ЗАЯВКИ",
      text: "После входа в личный кабинет, вы заполняете форму заявки и прикрепляете необходимые документы."
    },
    {
      number: 3,
      title: "ОБРАБОТКА ЗАЯВКИ",
      text: "Специалисты проверяют заявку. При необходимости вам могут направить запрос на уточнение данных."
    },
    {
      number: 4,
      title: "ПОЛУЧЕНИЕ КОДА",
      text: "После одобрения заявки в вашем личном кабинете отображается уникальный 20-значный адресный код."
    }
  ];

   const faqs = [
    {
      question: "1. ЧТО ТАКОЕ АДРЕСНЫЙ КОД И ЗАЧЕМ ОН НУЖЕН?",
      answer:
        "Это уникальный 20‑значный цифровой код, присваиваемый каждому объекту недвижимости в Таджикистане. Он нужен для точной идентификации адреса в государственных и коммунальных системах.",
    },
    {
      question: "2. КТО МОЖЕТ ПОДАТЬ ЗАЯВКУ НА ПОЛУЧЕНИЕ АДРЕСНОГО КОДА?",
      answer: "Любой собственник недвижимости или его законный представитель.",
    },
    {
      question: "3. КАКИЕ ДОКУМЕНТЫ НУЖНЫ ДЛЯ ПОДАЧИ ЗАЯВКИ?",
      answer: "Техпаспорт, удостоверение личности, документы на право собственности.",
    },
    {
      question: "4. СКОЛЬКО ВРЕМЕНИ ЗАНИМАЕТ РАССМОТРЕНИЕ ЗАЯВКИ?",
      answer: "Обычно от 3 до 7 рабочих дней.",
    },
    {
      question: "5. КАК Я УЗНАЮ, ЧТО ЗАЯВКА ОБРАБОТАНА?",
      answer: "Вы получите уведомление в личном кабинете или по SMS.",
    },
    {
      question: "6. ЧТО ДЕЛАТЬ, ЕСЛИ ЗАЯВКУ ОТКЛОНИЛИ ИЛИ ПОПРОСИЛИ ИСПРАВИТЬ?",
      answer: "Внесите корректировки и повторно отправьте заявку.",
    },
    {
      question: "7. МОЖНО ЛИ ПОЛУЧИТЬ АДРЕСНЫЙ КОД БЕЗ ТЕХПАСПОРТА?",
      answer: "Нет, техпаспорт обязателен.",
    },
    {
      question: "8. ГДЕ Я МОГУ НАЙТИ СВОЙ 20‑ЗНАЧНЫЙ КОД ПОСЛЕ ОДОБРЕНИЯ?",
      answer: "В личном кабинете в разделе «Мои объекты».",
    },
    {
      question: "9. МОГУ ЛИ Я ИСПОЛЬЗОВАТЬ АДРЕСНЫЙ КОД ДЛЯ ОФОРМЛЕНИЯ ДРУГИХ ДОКУМЕНТОВ?",
      answer: "Да, код используется в различных государственных сервисах.",
    },
    {
      question: "10. ЧТО ДЕЛАТЬ, ЕСЛИ Я ЗАБЫЛ ПАРОЛЬ ОТ ЛИЧНОГО КАБИНЕТА?",
      answer: "Воспользуйтесь функцией восстановления пароля на сайте.",
    },
  ];

  

  return (
    <div className="">

        <header className="flex flex-wrap justify-around gap-[200px] items-center h-[60px] bg-black text-white">
          <div className="w-[25%] space-x-3  flex flex-wrap justify-center items-center">
            <img src={gerb} alt="" />
          <div className="h-[40px] bg-gray-400 w-[2px]"></div>
          <img src={loc} className="w-[60px]" alt="" />

          <h1 className="text-[30px] font-[700]">Реестр адресов</h1>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-3">

            <select className="border-[2px] h-[35px] pb-1 px-1 bg-black text-white border-[#01A558] rounded-lg" name="ru" id="ru">
              <option value="ru">ru</option>
              <option value=""></option>
            </select>

              <button className="w-[114px] bg-[#01A558] rounded-lg h-[35px] ">
                ВХОД
              </button>

              <button className="w-[114px] bg-black text-white rounded-lg border-[2px]  h-[35px]  border-[#01A558] ">
                Регистрация
              </button>

          </div>
        
        </header>

        <section
  className="relative flex flex-wrap justify-center gap-20 h-[500px] items-center bg-[linear-gradient(256.1deg,#00EC7E_-0.55%,#000000_59.92%)]"
>
  
  <img
    src={res}
    alt="фон"
    className="pointer-events-none absolute  top-0 right-0 w-[360px] h-auto select-none "
  />

  <div className="text-white z-10">
    <h1 className="text-[40px] mb-4 font-[800]">Единый адресный реестр</h1>
    <div className="text-[19px] mb-4 flex space-x-3">
      <div className="bg-[#01A558] w-[5px]"></div>
      <p className="w-[65%]">
        Цифровая система присвоения адресного кода для недвижимости по всей стране
      </p>
    </div>

    <h1 className="text-[23px] font-[700]">
      Сейчас в Государственном адресном реестре содержится
    </h1>
    <div className="w-[35%] mt-[-10px]">
      <h1 className="text-[40px] text-[#00FF88] font-[700] flex flex-wrap items-center justify-around ">
        210 990 <p className="text-[#01A558] text-[23px] font-[700]">адресов</p>
      </h1>
    </div>

    <div className="flex items-center w-full max-w-3xl bg-gray-100 rounded-xl shadow px-4 py-2">
      <input
        type="text"
        defaultValue="5467 8934 5678 9567 8906 780"
        className="flex-1 text-[20px] font-[700] pl-6 bg-transparent focus:outline-none h-[60px] text-black"
      />
      <button className="ml-2 bg-green-600 hover:bg-green-700 w-[100px] h-[50px] text-white font-medium px-5 py-2 rounded-xl transition">
        Найти
      </button>
    </div>
  </div>

  <div className="flex flex-wrap justify-start items-center w-[400px] h-[300px] bg-white border border-gray-200 rounded-xl p-4 shadow-md relative z-10">
    <h2 className="text-[#00A15D] font-[700] text-[24px] mb-1">АДРЕС ВНЕСЕН</h2>
    <p className="text-[17px] text-gray-800 mb-3">Ваш адрес успешно внесен в нашу систему.</p>

    <div className="mb-3 bg-black w-full h-[1px]"></div>

    <ul className="space-y-2 text-[19px] text-black">
      <li className="flex items-start gap-2">
        <span className="w-3 h-3 bg-[#00A15D] rounded-full mt-[10px]"></span>
        <span>
          <strong>Дата регистрации:</strong> 25.08.2025
        </span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-3 h-3 bg-[#00A15D] rounded-full mt-[10px]"></span>
        <span>
          <strong>Адрес:</strong> г.Душанбе, Сино 123
        </span>
      </li>
    </ul>

    <button className="mt-5 w-full bg-[#00A15D] hover:bg-[#018e52] transition h-[50px] text-white font-medium py-2 rounded-lg">
      Войти в личный кабинет
    </button>
  </div>
</section>


        <section className="flex flex-wrap justify-center items-center pt-10">
            <div className="w-full max-w-6xl shadow-lg shadow-green-600 bg-white rounded-2xl flex-wrap items-center justify-between  p-6 flex  gap-6 border border-gray-200">
      
      <div className="flex-shrink-0">
        <img
          src={cut}
          alt="Дом"
          className="w-[300px] h-auto"
        />
      </div>

      
      <div className="flex  flex-col flex-wrap">
        <h2 className="text-xl font-bold text-[#123553]">
          ЧТО ТАКОЕ «ЕДИНЫЙ АДРЕСНЫЙ РЕЕСТР»?
        </h2>
        <p className="text-[#123553] text-lg mt-2">
          Это государственная цифровая система, в которой каждому объекту
          недвижимости <br /> в Республике Таджикистан присваивается уникальный{" "}
          <span className="font-semibold text-[#123553]">
            20-значный адресный код
          </span>.
        </p>

        
         <div className="flex gap-2 mt-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text  "
              maxLength="1"
              defaultValue={index + 1}
              className="w-[80px] h-[80px] text-center border-2 border-green-500 rounded-md text-lg font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          ))}
        </div>
      </div>
    </div>
        </section>


      <h2 className="text-lg font-[800] flex flex-wrap sticky justify-end w-[29%] mt-12 text-[#123553] mb-6">
        ЭТАПЫ РЕГИСТРАЦИИ
      </h2>
      
        <section className="flex flex-wrap justify-center items-center ">

           <div className="w-full pl-11 pt-8 max-w-6xl bg-white border-[2px] rounded-2xl shadow-md p-6">

      <div className="grid grid-cols-4 pl-6 gap-14">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-start">
            
            <div className="flex items-center  mb-3">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white ml-[-40px] flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-sm ml-2 font-bold text-gray-800">{step.title}</h3>
              {/* <div className="w-[60px] ml-2 h-[5px] bg-black"></div> */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] bg-black ml-2"></div>
              )}
            </div>

            {/* Текстовая часть */}
            <p className="text-sm text-[#123553] mt-1">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
        </section>

        <div className="felx flex-wrap justify-center  items-center text-center pt-24">
          <h1 className="text-[24px] font-[800] text-[#123553] mb-3">ДЛЯ КОГО ?</h1>
          <p className="text-[#123553] text-[19px] text-center ">Единый адресный реестр создан для удобства получения необходимых <br /> услуг связанных с получением актуальной информации и работы с нею.</p>
          <button className="w-[194px] text-[18px] bg-black mt-4 text-white rounded-lg border-[2px]  h-[40px]   ">
                связаться
              </button>
        </div>

        <sectionl className="flex flex-wrap justify-center items-center pt-16">

          <div className="border-[1px] border-[#CDCDCD] w-[300px] rounded-xl text-center flex flex-wrap justify-center items-center flex-col py-4 px-6">
            <img src={image} alt="" />
            <h1 className="text-[18px] font-[700] text-[#123553] mb-4">Граждане</h1>
            <p className="text-[16px]  text-[#123553]">Быстрая подача заявки на адрес без хождения по инстанциям.</p>
          </div>

          <div className="w-[130px] h-[5px] bg-black"></div>
          <div className="border-[1px] border-[#CDCDCD] w-[300px] rounded-xl text-center flex flex-wrap justify-center items-center flex-col py-3 px-6">
            <img src={com} alt="" />
            <h1 className="text-[18px] font-[700] text-[#123553] mb-4">Компании</h1>
            <p className="text-[13px]  text-[#123553]">Простой доступ к точным адресам при оформлении юридических и хозяйственных объектов.</p>
          </div>

          <div className="w-[130px] h-[5px] bg-black"></div>
          <div className="border-[1px] border-[#CDCDCD] w-[300px] rounded-xl text-center flex flex-wrap justify-center items-center flex-col py-6 px-4">
            <img src={pic} alt="" />
            <h1 className="text-[16px] font-[700] text-[#123553] mb-4">Гос. и коммунальные органы</h1>
            <p className="text-[13px]  text-[#123553]">Единый стандарт адресов для регистрации, ЖКХ и межведомственного действия.</p>
          </div>


        </sectionl>

         <div className="felx flex-wrap justify-center  items-center text-center pt-24">
          <h1 className="text-[24px] font-[800] text-[#123553] mb-3">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
          <p className="text-[#123553] text-[19px] text-center ">Находите ответы на ваши вопросы. В случае если вы не нашли ответы <br /> на вопросы будут,вы можете написать нам </p>
          <button className="w-[194px] text-[18px] bg-black mt-4 text-white rounded-lg border-[2px]  h-[40px]   ">
                связаться
              </button>
        </div>

          <section className="flex justify-center py-10   min-h-screen">
      <div className="w-[70%] text-[#123553] font-[700] flex flex-wrap flex-col gap-4">
         {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderBottom: "1px solid #e5e7eb", // light Tailwind-style divider
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography className="text-[#123553] font-extrabold">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#123553]">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>

     <footer className="bg-[#00A15D] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        <div className="flex items-center gap-3">
          <div className="bg-black rounded-full px-4 py-2 flex items-center gap-2">
            <img src={gerb} alt="Лого" className="w-6 h-6" />
            <span className="font-semibold">РЕЕСТР АДРЕСОВ</span>
          </div>
        </div>

        
        <div className="text-sm text-white text-center md:text-left">
          <p>Республика Таджикистан, город <br /> Душанбе, улица Бехзод 47а</p>
        </div>

        
        <div className="text-sm text-white text-center md:text-left">
          <p>+992-000-00-00</p>
          <p>mail@mail.ru</p>
        </div>

       
        <div className="text-sm font-semibold text-white text-center md:text-left">
          <p>Обратиться в службу технической поддержки</p>
          <p>Связаться с нами</p>
        </div>
      </div>

     
      <div className="bg-black text-center text-white text-sm py-3">
        © 2024–2025 ОАО "Удостоверяющие центры, государственные услуги и разработка цифровых программ"
      </div>
    </footer>

    </div>
  );
};

export default Keylogger;
