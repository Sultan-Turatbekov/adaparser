import styles from "./Services.module.scss"

function Services() {
  return (
    <div className={styles.services}>
      <div>
          <h3 className={styles.services_title}>Парсинг данных по вашему техзаданию</h3>
          <p className={styles.services_text}>Нужно собрать базу телефонов, емейлов, спарсить товары интернет-магазина, получить информацию с досок объявлений? Мы все сделаем за вас, просто оставьте заявку</p>
          <button className={styles.services_btn}>Заявка на парсинг</button>
      </div>
      <div>
          <img src="" alt="services" />
      </div>
    </div>
  )
}

export default Services