import businessDataJson from "./businessDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import businessInfo from "./businessInfo.json"
import styles from "./styles.module.scss"

function Business() {
  return (
    <div>
        <AllEnterLink dataJson={businessDataJson}/>
        <div className={styles.services_reverse}>
    <div className={styles.services_imgConteiner}>
          <img src="https://www.rush-analytics.ru/wp-content/uploads/2021/10/pic_6_etapi_raboti_v_parsere.jpg" alt="services" />
      </div>
      <div>
          <h3 className={styles.services_title}>ADA-Parser способен заменить целую команду</h3>
          <p className={styles.services_text}>Экономьте время и деньги — теперь вам не нужно нанимать команду специалистов для сбора и анализа информации. Их с успехом заменит A-Parser</p>
          <p className={styles.services_text}>Специалисты техподдержки всегда помогут вам решить любую поставленную задачу. У нас также можно заказать индивидуальное решение по вашему ТЗ</p>
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

    <div className={styles.schemeOfWork_info_conteiner}>
        {businessInfo.map((item)=>(
          <div className={styles.schemeOfWork_info}>
          <img className={styles.schemeOfWork_info_img} src={item.img} alt="" />
          <h3 className={styles.schemeOfWork_info_title}>{item.subtitle}</h3>
          <h4 className={styles.schemeOfWork_info_subtitle}>{item.text}</h4>
        </div>
        ))}
    </div>

    </div>
    

  )
}

export default Business