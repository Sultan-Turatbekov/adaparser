import { FC } from 'react';
import { AllEnterLinkProps } from "@/src/types/AllEnterLink/AllEnterLink";
import styles from "./AllEnterLink.module.scss"


const AllEnterLink: FC<AllEnterLinkProps> = ({ dataJson }) => {
    return (
      <div>
        {dataJson.map((item, index) => (
          <div key={index} className={styles.allEnterLink}>
            <div>
              <h3 className={styles.allEnterLink_title}>{item.title}</h3>
              <p className={styles.allEnterLink_text}>{item.text}</p>
              <button className={styles.allEnterLink_btn}>Заявка на парсинг</button>
            </div>
            <div className={styles.allEnterLink_imgConteiner}>
              <img src={item.img} alt="services" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default AllEnterLink;