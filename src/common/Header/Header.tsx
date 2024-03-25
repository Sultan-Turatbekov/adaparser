import {Link} from "react-router-dom";
import  adaUse  from './adaUse.json';
import  resources  from './resources.json';
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import "./style.scss"
// import styles from '../Footer/Footer.module.css'


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"


export const Header = () => {
    return(
        <header  className={` bg-dark_full`}>
            
            <NavigationMenu className="NavigationMenu">
            <div className="header__logoConteiner">
                <Link to="/">
                <img src="logo.png" alt="logo" />
                </Link>
            </div>
            <NavigationMenuList className="NavigationMenuItem">
                <NavigationMenuItem >
                <NavigationMenuTrigger className="NavigationMenuTrigger">Кто использует ADA-Parser</NavigationMenuTrigger>
                <NavigationMenuContent className="NavigationMenuContent">
                {adaUse.map((item) => (
                <Link to="#" key={item.subtitle}>
                    <div className="Header__link">
                        <img className="Header__link_img" src={item.img} alt="" />
                        <NavigationMenuLink className="Header__link_subtitle">{item.subtitle}</NavigationMenuLink>
                        <p>{item.text}</p>
                    </div>
                </Link>
                ))}
 
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuTrigger className="NavigationMenuTrigger">Ресурсы</NavigationMenuTrigger>
                <NavigationMenuContent className="NavigationMenuContent2">
                {resources.map((item) => (
                <div key={item.subtitle} className="Header__link">
                    <img className="Header__link_img" src={item.img} alt="" />
                    <NavigationMenuLink className="Header__link_subtitle">{item.subtitle}</NavigationMenuLink>
                    <p>{item.text}</p>
                </div>
                ))}   
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <Link to="/parsings-list"><h2 className="NavigationMenuTrigge NavigationMenuTrigg">Парсеры</h2></Link>
            <Link to="/servicesPage"><h2 className="NavigationMenuTrigge">Услуги</h2></Link>
            <Link to="#"><h2 className="NavigationMenuTrigge">Форум</h2></Link>
            </NavigationMenu>
            <Link to="#"><button className="header_button">Купить ADA-Parser</button></Link>
           <BurgerMenu/>
            <div className="header_logo_media">
                <img src="logo.png" alt="" />
            </div>
        </header>
    )
}