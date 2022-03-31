import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import LoginCss from "../style/Home.module.css";

const Sidebar = () => {
  return (
   
      <CDBSidebar  textColor="#fff" backgroundColor="#333" style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/client" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Clientes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/security" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Vigiladores
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Sucursales</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Calendario</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Reportes
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
  
  );
};

export default Sidebar;
