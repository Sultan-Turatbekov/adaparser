import {Link} from "react-router-dom";
import   adaUse   from '../../../common/Header/adaUse.json';
import  resources  from '../../../common/Header/resources.json';
import "./style.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/src/components/ui/navigation-menu"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/src/components/ui/sheet"

export const BurgerMenu = () => {
    return(
        <div className="BurgerMenu">
            <Sheet>
            <SheetTrigger><FontAwesomeIcon id="BurgerMenu_icon" icon={faBars} /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>ADA-Parser</SheetTitle>
                <SheetDescription>
                <NavigationMenu className="BurgerMenu_NavigationMenu">
            <NavigationMenuList className="NavigationMenuList">
                <NavigationMenuItem >
                <NavigationMenuTrigger className="NavigationMenuTrigger">Кто использует ADA-Parser</NavigationMenuTrigger>
                <NavigationMenuContent className="NavigationMenuContent">
                    {adaUse.map((item)=>(
                        <Link to="#">
                            <div key={item.subtitle} className="Header__link">
                            <img className="Header__link_img" src={item.img} alt="" />
                            <NavigationMenuLink className="Header__link_subtitle">{item.subtitle}</NavigationMenuLink>
                           
                        </div>
                        </Link>
                        
                    ))}      
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuTrigger className="NavigationMenuTrigger resurs">Ресурсы</NavigationMenuTrigger>
                <NavigationMenuContent className="NavigationMenuContent2">
                    {resources.map((item)=>(
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
            <Link to="#"><button className="BurgerMenu_button">Купить ADA-Parser</button></Link>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
            
        </div>
    )
}