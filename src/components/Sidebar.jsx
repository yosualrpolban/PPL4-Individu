import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.jsx";
import SidebarMenu from "./SidebarMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #dee0e6;
  height: 80px;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #dee0e6;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#3c7bc3" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center", marginLeft: "200px", color: "blue" }}
          >
            FP PLN
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>

    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <div className="sidebarMenu">
    //       <h2 className="sidebarTitle">Dashboard</h2>
    //       <ul className="sidebarList">
    //         <Link to="/" className="link">
    //           <li className="sidebarListItem active">
    //             <LineStyle className="sidebarIcon" />
    //             Home
    //           </li>
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h2 className="sidebarTitle">Master</h2>
    //       <ul className="sidebarList">
    //         <Link to="/users" className="link">
    //           <li className="sidebarListItem">
    //             <AccountCircle className="sidebarIcon" />
    //             Peserta
    //           </li>
    //         </Link>
    //         <Link to="/products" className="link">
    //           <li className="sidebarListItem">
    //             <SupervisedUserCircle className="sidebarIcon" />
    //             Penguji
    //           </li>
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Notifications</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <MailOutline className="sidebarIcon" />
    //           Mail
    //         </li>
    //         <li className="sidebarListItem">
    //           <DynamicFeed className="sidebarIcon" />
    //           Feedback
    //         </li>
    //         <li className="sidebarListItem">
    //           <ChatBubbleOutline className="sidebarIcon" />
    //           Messages
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Staff</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <WorkOutlined className="sidebarIcon" />
    //           Manage
    //         </li>
    //         <li className="sidebarListItem">
    //           <Timeline className="sidebarIcon" />
    //           Analytics
    //         </li>
    //         <li className="sidebarListItem">
    //           <Report className="sidebarIcon" />
    //           Reports
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
