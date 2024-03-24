import {Link} from "react-router-dom";
import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
    return (
        <footer className={`${styles.full_bleed} bg-dark_full py-4 md:py-10 lg:py-16 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white`}>
            <div className={`mt-2`}>
                <div className={`max-w-[200px] mb-4`}>
                    <img width={`100%`} src='logo.png' alt="logo"/>
                </div>
                <p className={`mb-10`}>&copy; 2023 All Rights Reserved</p>
                <div className={`flex flex-col gap-1`}>
                    <Link to={`*`} className={` hover:border-b transition-all duration-200 max-w-[210px]`}>Условия использования</Link>
                    <Link to={`*`} className={` hover:border-b transition-all duration-200`}>Политика и конфедеренциальность</Link>
                </div>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>Контакты</h4>
                <ul className={`flex flex-col gap-2`}>
                    <li>

                        <Link to={``} className={`flex gap-2 items-center cursor-pointer`}>
                            <div className={`max-w-[20px]`}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                            <p className={` hover:border-b transition-all duration-200`}>+996(777)777-777</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`https://www.instagram.com/adacourses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`} className={`flex gap-2 items-center cursor-pointer`}>
                            <div className={`max-w-[20px]`}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <p className={` hover:border-b transition-all duration-200`}>adacources</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`*`} className={`flex gap-2 items-center cursor-pointer`}>
                            <div className={`max-w-[20px]`}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <p className={` hover:border-b transition-all duration-200`}>adacources</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={``} className={`flex gap-2 items-center cursor-pointer`}>
                            <div className={`max-w-[20px]`}>
                                <FontAwesomeIcon icon={faTelegram} />
                            </div>
                            <p className={` hover:border-b transition-all duration-200`}>+996(777)777-777</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>Наши услуги</h4>
                <ul className={`flex flex-col gap-2`}>
                    <li>Парсинг инстаграм</li>
                    <li>Парсинг Wildberries</li>
                    <li>Парсинг онлайн магазинов</li>
                </ul>
            </div>
            <div>
                <h4 className={`text-base font-bold mb-5`}>Способы оплаты</h4>
                <ul className={`grid grid-cols-3 gap-3`}>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[3px] h-9`} src={`footer_images/mbank_ico.png`} alt="mbank"/>
                    </li>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[3px] h-9`} src={`footer_images/visa_ico.png`} alt="visa"/>
                    </li>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[3px] h-9`} src={`footer_images/mastercard_ico.jpg`} alt="mastercard"/>
                    </li>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[3px] h-9`} src={`footer_images/odengi_ico.png`} alt="o_dengi"/>
                    </li>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[3px] h-9`} src={`footer_images/sberbank_ico.png`} alt="sberbank"/>
                    </li>
                    <li className={`max-w-16 w-full`}>
                        <img width={`100%`} className={`rounded-[5px]`} src={`footer_images/elkart_ico.png`} alt="elcard"/>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

