import { useContext } from "react";
import "./ContentTop.scss";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";
const ContentTop = () => {
    // 切换sidebar

  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">                             
        <button type="button" className="siderbar-toggle" onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">home</h3>
      </div>
      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
            <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn">
            <img src={iconsImgs.bell} alt="" />
            <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};
export default ContentTop;
