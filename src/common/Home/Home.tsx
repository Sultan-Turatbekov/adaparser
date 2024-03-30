import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import AllEnterLink from "../../components/shared/AllEnterLink/AllEnterLink"
import homeDataJson from "./homeDataJson.json"
import TopStore from "@/src/components/shared/TopStore/TopStore";

export const Home = () => {
    return(
        <>
            <AllEnterLink dataJson={homeDataJson}/>
            <AllParsings/>
            <TopStore/>
        </>
    )
}