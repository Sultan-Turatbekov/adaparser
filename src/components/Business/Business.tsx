import businessDataJson from "./businessDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"

function Business() {
  return (
    <div>
        <AllEnterLink dataJson={businessDataJson}/>
    </div>
  )
}

export default Business