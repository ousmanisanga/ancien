import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./Chat/Notifications";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid style={{width: "auto", padding: 0 }}>
      <style>
        {`
          .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #318ce7;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
          }

          .sidebar a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 18px;
            color: white;
            display: block;
            transition: 0.3s;
          }

          .sidebar a:hover {
            color: #818181;
          }

          .sidebar .close-btn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
          }

          .sidebar-toggle {
            font-size: 20px;
            cursor: pointer;
            background: none;
            border: none;
            color: white;
            padding: 10px;
            margin-top: -5px;
          }

          .sidebar.open {
            width: 250px;
          }
        `}
      </style>
      <Navbar bg="primary" className="mb-4" style={{ height: "3.75rem" }}>
        <Container>
          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <Link to="#" className="close-btn" onClick={toggleSidebar}>
              &times;
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Conversations
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Groupes
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Amis en ligne
            </Link>
            <Link to="/register" onClick={() => { toggleSidebar(); logoutUser(); }}>
              S'inscrire
            </Link>
            <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }}>
              connexion
            </Link>
            <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }}>
              Se déconnecter
            </Link>
          </div>
          
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={3} style={{marginLeft: "20px"}}>
              {!user && (
                <>
                <button className="sidebar-toggle" onClick={toggleSidebar} >
                ☰ Menu
              </button>
                  
                </>
              )}
              {user && (
                <>
                  <Notifications />
                  <Link onClick={() => logoutUser()} to="/logchat" className="link-light text-decoration-none">
                    Déconnexion
                  </Link>
                </>
              )}
              
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
