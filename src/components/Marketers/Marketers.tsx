import marketersDataJson from "./marketersDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"

function Marketers() {
  return (
    <div>
        <AllEnterLink dataJson={marketersDataJson}/>
    </div>
  )
}

export default Marketers