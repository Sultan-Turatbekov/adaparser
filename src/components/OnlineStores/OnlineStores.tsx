import OnlineStore from "./OnlineStoresDataJson.json"
import AllEnterLink from "../shared/AllEnterLink/AllEnterLink"
import TopStore from "../shared/TopStore/TopStore"
import Infoabout from "../shared/Infoabout/Infoabout"
// import styles from "./styles.module.scss"


function OnlineStores() {
  return (
    <div>
        <AllEnterLink dataJson={OnlineStore}/>
        <TopStore/>
        <Infoabout/>
    </div>
  )
}

export default OnlineStores