import {faFacebook, faInstagram, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export const contactLinks:contacts[] = [
    { to: 'https://www.instagram.com/adacourses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: faInstagram, text: 'adacourses' },
    { to: '*', icon: faFacebook, text: 'adacourses' },
    { to: '*', icon: faWhatsapp, text: '+996(777)777-777' },
    { to: '*', icon: faTelegram, text: '+996(777)777-777' }
];

export const paymentMethods:payment[] = [
    { src: 'footer_images/mbank_ico.png', alt: 'mbank', rounded: '3px' },
    { src: 'footer_images/visa_ico.png', alt: 'visa', rounded: '3px' },
    { src: 'footer_images/mastercard_ico.jpg', alt: 'mastercard', rounded: '3px' },
    { src: 'footer_images/odengi_ico.png', alt: 'o_dengi', rounded: '3px' },
    { src: 'footer_images/sberbank_ico.png', alt: 'sberbank', rounded: '3px' },
    { src: 'footer_images/elkart_ico.png', alt: 'elcard', rounded: '5px' }
];
export const services:string[] = [
    'Парсинг инстаграм',
    'Парсинг Wildberries',
    'Парсинг онлайн магазинов'
]

export interface contacts {
    to: string,
    icon: IconDefinition,
    text: string
}

export interface payment {
    src: string,
    alt: string,
    rounded: string
}

