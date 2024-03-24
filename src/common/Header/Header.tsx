import {Link} from "react-router-dom";
import {Button} from "@/src/components/ui/button.tsx";

export const Header = () => {
    return(
        <header>
            <Button className={`bg-blue-600 text-red-700 p-3 underline hover:bg-yellow-500`}>Adil</Button>
            <Link to={`/`} className={`bg-black text-red-700 p-3`}>Home</Link>
            <Link to={`/parsings-list`}>Second</Link>
            <Link to={`/any`}>any</Link>
        </header>
    )
}