import data from './allParsings-data.json';
import { AllParsingsType } from "@/src/types/allParsingsType.ts";
import { ParsingsListItem } from "@/src/components/shared/ParsingsListItems/ParsingsListItem.tsx";

export const AllParsings = () => {
    return (
        <section className={`py-10`}>
            <h2 className={`font-bold text-5xl mb-10 text-center`}>Все парсеры</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                {data.map((item: AllParsingsType, index: number) => (
                    <ParsingsListItem item={item} index={index} key={index} />
                ))}
            </div>
        </section>
    )
}