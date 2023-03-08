import "./topbar.css"
import { UilSearch,UilUser,UilChat,UilBell} from '@iconscout/react-unicons'
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Lamasocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <UilSearch className="searchIcon"/>
          <input
          placeholder="Search for friend, post or video"
          className="searchInput"  
          />
          </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          </div>  
          <div className="topbarIcon">
            <div className="topbarIconItem">
              <UilUser />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <UilChat/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <UilBell/>
              <span className="topbarIconBadge">1</span>
            </div>  
          </div>
          <img src="/Assets/person1.jpeg" alt="" className="topbarImage" />
        </div>      
    </div>
  )
}
