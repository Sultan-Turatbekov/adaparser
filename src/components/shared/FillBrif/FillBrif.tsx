import { Link } from "react-router-dom"
export const FillBrif = () =>{
    return(
        <div className="flex justify-between items-center ">
            <div className=" flex flex-col gap-4  w-[500px]">
                <h2 className="text-4xl font-bold ">Индивидуальная разработка парсеров</h2>
                <p className="text-[18px]">Мы убеждены, что нет такой информации, которую невозможно спарсить</p>
                <ul className="flex flex-col gap-4">
                   <li className="flex items-start gap-2"><img className="mt-1" src="brifImages/brifDone.svg" alt="" /><span className="text-[18px]">Предоставляем индивидуальные решения для получения любых данных с любых сайтов</span> </li>
                   <li className="flex items-start gap-2"><img className="mt-1" src="brifImages/brifDone.svg" alt="" /><span className="text-[18px]">Предоставляем индивидуальные решения для получения любых данных с любых сайтов</span> </li>
                </ul>
                <Link to='/fill-brif' className="flex gap-2"><p className="font-bold text-blue-700">Заполните бриф</p><span><img className="mt-1" src="https://uploads-ssl.webflow.com/61ea8fed046f701b672b404d/61ea8fed046f70e6172b413d_Group%2084.svg" alt="" /></span></Link>
            </div>

            <div className="max-w-[705px] max-h-[585px]"><img className="size-full" src="brifImages/brif.png" alt="" /></div>
        </div>
    )
}
