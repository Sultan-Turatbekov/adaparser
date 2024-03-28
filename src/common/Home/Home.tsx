import {AllParsings} from "@/src/components/shared/AllParsings/AllParsing.tsx";
import AllEnterLink from "../../components/shared/AllEnterLink/AllEnterLink"
import homeDataJson from "./homeDataJson.json"

export const Home = () => {
    return(
        <>
            <AllEnterLink dataJson={homeDataJson}/>
            <AllParsings/>
        </>
    )
}