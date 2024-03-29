import {Button} from "@/src/components/ui/button.tsx";

export const Pricing = () => {
    const handleClick = () => {
        window.location.href='https://wa.me/+996556444514'
    }
    return (
        <section className={`my-10`}>
            <h3 className={`text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10`}>Закажи ПАРСИНГ прямо сейчас</h3>
            <div className={`flex flex-col sm:flex-row items-center gap-5`}>
                <div className={`w-1/2`}>
                    <img width={`100%`} src="pricingImages/parser.png" alt="pricingImages"/>
                </div>
                <div className={`flex flex-col justify-center`}>
                    <ul className={`flex flex-col gap-1 md:gap-3 mb-5 sm:mb-10 lg:mb-20`}>
                        <li className={`relative flex items-start gap-2`}>
                            <img src="pricingImages/checkMark.svg" alt="mark"/>
                            Парсинг все возможной информации</li>
                        <li className={`relative flex items-start gap-2`}>
                            <img src="pricingImages/checkMark.svg" alt="mark"/>
                            2 месяца обновления</li>
                        <li className={`relative flex items-start gap-2`}>
                            <img src="pricingImages/checkMark.svg" alt="mark"/>
                            Поддержка
                        </li>
                    </ul>
                    <Button
                        className={` mx-auto bg-blue_custom hover:bg-blue_hover hover:border-black hover:border transition-all duration-500 hover:text-black max-w-[200px] w-full font-[600] text-sm md:text-xl lg:text-2xl`} onClick={handleClick}>Заказать</Button>
                </div>
            </div>
        </section>
    )
}