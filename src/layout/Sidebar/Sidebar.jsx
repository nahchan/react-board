import "./Sidebar.scss";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
const Sidebar = () => {
  const [activelinkId,setActiveId]=useState(2)
  const [sidebarClass,setSidebarClass]=useState("")
  //控制sidebar是否展开
  const {isSidebarOpen} =useContext(SidebarContext)
  console.log(isSidebarOpen)
  useEffect(()=>{
    if(isSidebarOpen){
      setSidebarClass("sidebar-change")
    }else{
      setSidebarClass('')
    }
  },[isSidebarOpen])
  function changeActiveId(id){
    setActiveId(id)
  }
  return (
    <div className={`side-bar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="个人头像" />
        </div>
        <span className="info-name">Amy</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((item) => (
            <li className="nav-item" key={item.id} onClick={()=>changeActiveId(item.id)}>
              <a href="#" className={`nav-link ${item.id===activelinkId ? 'active' :' '}`}>
                <img
                  className="nav-link-icon"
                  src={item.image}
                  alt={item.title}
                />
                <span className="nav-link-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
