import {Link} from "react-router-dom";
import  adaUse  from './adaUse.json';
import  resources  from './resources.json';
import { BurgerMenu } from "../../components/shared/burgerMenu/BurgerMenu";
import styles from './Header.module.scss';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"


  export const Header = () => {
    return (
        <header className={`${styles.full_bleed }`}>
            <div className={styles.header_container}>
                <NavigationMenu className={styles.NavigationMenu}>
                    <div className={styles.header_logoContainer}>
                        <Link to="/">
                            <img src="logoWi.svg" alt="logo" />
                        </Link>
                    </div>
                    <NavigationMenuList className={styles.NavigationMenuItem}>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>Кто использует ADA-Parser</NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent}>
                                {adaUse.map((item) => (
                                    <Link to={item.link} key={item.subtitle}>
                                        <div className={styles.Header_link}>
                                            <img className={styles.Header_link_img} src={item.img} alt="" />
                                            <NavigationMenuLink className={styles.Header_link_subtitle}>{item.subtitle}</NavigationMenuLink>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={styles.NavigationMenuTrigger}>Ресурсы</NavigationMenuTrigger>
                            <NavigationMenuContent className={styles.NavigationMenuContent2}>
                                {resources.map((item) => (
                                    <div key={item.subtitle} className={styles.Header_link}>
                                        <img className={styles.Header_link_img} src={item.img} alt={item.text} />
                                        <NavigationMenuLink className={styles.Header_link_subtitle}>{item.subtitle}</NavigationMenuLink>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <Link to="/parsings-list"><h2 className={`${styles.NavigationMenuTrigger} ${styles.NavigationMenuTrigg}`}>Парсеры</h2></Link>
                    <Link to="/services"><h2 className={styles.NavigationMenuTrigge}>Услуги</h2></Link>
                </NavigationMenu>
                <Link to="#"><button className={styles.header_button}>Купить ADA-Parser</button></Link>
                <BurgerMenu />
                <div className={styles.header_logo_media}>
                    <img src="logoWi.svg" alt="" />
                </div>
            </div>
        </header>
    );
}