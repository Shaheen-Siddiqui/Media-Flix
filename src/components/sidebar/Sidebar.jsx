import { FaHome } from "react-icons/fa";
import { MdExplore, MdWatchLater } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'

import "./Sidebar.css";

 const Sidebar = ({toggleSibebar,setToggleSidebar}) => {
  const navigate=useNavigate();

  return (<>
    <nav className={ `sidebar-case ${toggleSibebar?`mobile-show`:`mobile-hide`}`} onClick={()=>setToggleSidebar(false)}>
      <div className="single-navcase" onClick={()=>navigate('/')}>
        <FaHome size={25} />
        <h3>Home</h3>
      </div>

      <div className="single-navcase" onClick={()=>navigate('/explore')}>
        <MdExplore size={25} />
        <h3>Explore</h3>
      </div>

      <div className="single-navcase" onClick={()=>navigate('/playlist')}>
        <BiSolidPlaylist size={25} />
        <h3>Playlist</h3>
      </div>

      <div className="single-navcase" onClick={()=>navigate('/watchlater')}>
        <MdWatchLater size={25} />
        <h3>Watch Later</h3>
      </div>
    </nav>
  </>
  );
};
export default Sidebar
