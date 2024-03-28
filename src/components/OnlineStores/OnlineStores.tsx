import OnlineStore from "./OnlineStoresDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"

function OnlineStores() {
  return (
    <div>
        <AllEnterLink dataJson={OnlineStore}/>
    </div>
  )
}

export default OnlineStores