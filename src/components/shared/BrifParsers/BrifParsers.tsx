import brifParsers from './brifparsers.json'
import {BrifparsingType} from "@/src/types/brifparsingType.ts";
export const BrifParsers = () =>{
    return(
        <>
          <div className=" flex justify-center mt-[50px]">
                <div className="text-center w-[840px] ">
                    <h1 className="text-[60px] font-bold">Разработка индивидуальных парсеров на заказ</h1>
                    <p className="text-[22px]">Идеальное решение для вашего бизнеса. Наши специалисты выполнят ваш заказ качественно и оперативно.</p>
                </div>
          </div>

          
          <div className="flex justify-between items-center mt-[100px] ">
                <div className=" flex flex-col gap-4  w-[600px]">
                    <h2 className="text-[48px] font-bold ">Бриф на создание парсера</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2"><img className="mt-1" src="brifImages/brifDone.svg" alt="" />
                            <span className="text-[18px]">Откройте файл Google docs и сделайте дубликат Технического задания (ТЗ), чтобы иметь возможность вносить изменения в копию.</span>
                        </li>
                        <li className="flex items-start gap-2"><img className="mt-1" src="brifImages/brifDone.svg" alt="" />
                            <span className="text-[18px]">Заполните дубликат файла ТЗ, следуя инструкциям в брифе на разработку парсера. После заполнения отправьте готовое ТЗ или ссылку на него в техническую поддержку.</span>
                        </li>
                    </ul>
                </div>

            <div>
                <div className="grid grid-cols-2 gap-4 ml-[50px] ">
                    <div className="flex flex-col items-center text-center p-[30px]  bg-white-100 rounded-2xl shadow-lg shadow-slate-150 bg-white" >
                        <img className="w-[64px] h-[64px]" src="brifImages/telegramImage.svg" alt="" />
                        <h3 className="text-[28px]">Отправить в Telegram</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-[30px] rounded-2xl  bg-white-100 shadow-lg shadow-slate-150 bg-white">
                        <img src="brifImages/messageImage.png" alt="" />
                        <h3 className="text-[28px]">Отправить в Online-чат</h3>
                    </div>
                    <div className="col-span-2 flex flex-col items-center text-center p-[30px] rounded-2xl  bg-white-100 shadow-lg shadow-slate-150 bg-white">
                        <img src="brifImages/brifTz.png" alt="" />
                        <h3 className="text-[28px]">Заполнить техническое задание</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex justify-between items-end mt-[100px]">
            <h1 className="text-[48px] font-bold w-[510px]">Примеры технических заданий</h1>
            <p className="text-[18px] w-[510px]">Используйте эти примеры технических заданий в качестве руководства для составления своих собственных заданий.</p>
       </div>


            <div className="flex flex-wrap gap-8 mt-[100px] mb-[100px]">
                {brifParsers.map((item:BrifparsingType,index:number)=> (
                    <div key={index} className="w-[400px] flex flex-col gap-6 p-[32px] bg-white shadow-lg shadow-black-900 rounded-md">
                        <div className="flex justify-between  items-center">
                            <img className="w-[56px] h-[56px]" src={item.image} alt="Tik Tok"/>
                            <button className="flex items-center border-solid border-2 border-black-500 rounded-md p-[5px] bg-[#F0F2F5] hover:bg-slate-200 transition ease-in-out delay-150">
                                <img className="mr-[3px]" src="brifImages/plusImage.svg"/><p>Открыть</p>
                            </button>
                        </div>
                        <h4 className="text-[28px] font-bold">{item.header}</h4>
                        <p className="text-[18px]">{item.title}</p>
                    </div>
                ))}


            </div>
        </>
    )
}