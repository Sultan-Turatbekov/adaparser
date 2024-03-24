import data from './allParsings-data.json'
import {AllParsingsType} from "@/src/types/allParsingsType.ts";
import {Button} from "@/src/components/ui/button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
export const AllParsings = () => {
    return(
        <section className={`py-10`}>
            <h2 className={`font-bold text-5xl mb-10 text-center`}>Все парсеры</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                {data.map((item:AllParsingsType, index:number)=>(
                    <div key={index} className={`max-w-[400px] py-8 px-7 flex flex-col shadow-xl rounded-[6px]`}>
                        <div className={`flex justify-between items-center mb-10 max-h-[50px] h-full`}>
                            <div className={`max-w-14`}>
                                <img className={`w-full`} src={item.img} alt={item.title}/>
                            </div>
                            <Button className={`max-w-[120px] w-full bg-slate-200 hover:bg-slate-300 text-black`}><FontAwesomeIcon className={`mr-3`} icon={faPlus} /> Подробнее</Button>
                        </div>
                        <h3 className={`font-bold text-xl`}>{item.title}</h3>
                        <p className={`mt-auto`}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}