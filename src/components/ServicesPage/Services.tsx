import servicesInfo from "./servicesInfo.json"
import servicesDataJson from "./servicesDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import styles from "./Services.module.scss"

function Services() {
  return (
    <>
    <AllEnterLink dataJson={servicesDataJson}/>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="https://www.rush-analytics.ru/wp-content/uploads/2021/10/pic_6_etapi_raboti_v_parsere.jpg" alt="services" />
      </div>
      <div>
          <h3 className={styles.services_title}>Индивидуальные решения каждой задачи</h3>
          <p className={styles.services_text}>Колоссальная производительность, многопоточность, автономность, гибкость конфигураций позволяет A-Parser’у решать практически любые задачи по сбору данных с различных источников</p>
          <p className={styles.services_text}>Мы предлагаем индивидуальные решения парсинга — вы получаете уникальную базу данных, собранную согласно вашим требованиям</p>
      </div>
    </div>

    <div className={styles.services}>
    <div>
          <h3 className={styles.services_title}>Почему мы лучшие в этом</h3>
          <p className={styles.services_text}>Наши технические специалисты выполняют парсинг данных, строго следуя техническому заданию. Объем данных ограничен только вами (по ТЗ) или ресурсом, с которого будет выполняться парсинг</p>
          <p className={styles.services_text}>Ключевым преимуществом для вас может стать то, что вы сами в дальнейшем сможете парсить данные, купив лицензию A-Parser с пресетом под ваше задание</p>
      </div>
      <div className={styles.services_imgConteiner}>
          <img src="https://www.rush-analytics.ru/wp-content/uploads/2021/10/pic_6_etapi_raboti_v_parsere.jpg" alt="services" />
      </div>
    </div>

    <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="https://www.rush-analytics.ru/wp-content/uploads/2021/10/pic_6_etapi_raboti_v_parsere.jpg" alt="services" />
      </div>
      <div>
          <h3 className={styles.services_title}>Стоимость парсинга данных по вашим техническим заданиям</h3>
          <p className={styles.services_text}>Минимальный заказ — $50. Точная стоимость формируется после рассмотрения вашего технического задания</p>
          <p className={styles.services_text}>В стоимость входит написание уникального пресета для A-Parser, который можно будет использовать в дальнейшем. Предусмотрено тестирование пресета, формирование файла результатов для клиента</p>
      </div>
    </div>

    <div className={styles.schemeOfWork}>
        <div className={styles.schemeOfWork_titleContiner}>
            <h3 className={styles.schemeOfWork_title}>Схема работы</h3>
            <h4 className={styles.schemeOfWork_subtitle}>Услуги парсинга данных позволяют получить нужную информацию не тратя свое время</h4>
        </div>
        <div className={styles.schemeOfWork_info_conteiner}>
        {servicesInfo.map((item)=>(
          <div className={styles.schemeOfWork_info}>
          <img className={styles.schemeOfWork_info_img} src={item.img} alt="" />
          <h3 className={styles.schemeOfWork_info_title}>{item.subtitle}</h3>
          <h4 className={styles.schemeOfWork_info_subtitle}>{item.text}</h4>
        </div>
        ))}
    </div>
        
        
    </div>

    </>
  )
}

export default Services