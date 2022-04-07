import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { setPosition } from "./states/geoLocalizacion"; */
import { effectLogin } from "./states/user";
import Login from "./components/Login";
import ClientForm from "./components/ClientFrom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import Security from "./components/Security";
import "./style/index.scss";
import Sidebar from "./components/Sidebar";
import Clients from "./components/Clients";
import { effectDevice } from "./states/device";
import HomeMobile from "./components/homeMobile";
import CardClient from "./components/CardClient";
import EditClient from "./components/EditClient";
import NavbarMobile from "./components/NavMobile";
import SecurityList from "./components/SecurityList";
import BranchOfficeForm from "./components/BranchOfficeForm";
import SearchBranchOffice from "./components/SearchBranchOffice";
import CardBranchOffice from "./components/CardBranchOffice";
import EditBranchOffice from "./components/EditBranchOffice";
import AvisosForm from "./components/AvisosForm";
import ClientFormNuevo from "./components/ClientFormNuevo";
import SecurityFormNuevo from "./components/SecurityFormNuevo";
import EditSecurityNuevo from "./components/EditSecurityNuevo";
import Calendar from "./components/Calendar";
import EstadisticasUser from "./components/EstadisticasUser";
import Footer from "./components/Footer";
import CalendarAssignment from "./components/CalendarAssignment";
import AssignSecurity from "./components/AssignSecurity"
import CalendarBranchFilter from "./components/CalendarBranchFilter"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectLogin())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    dispatch(effectDevice()).catch((err) => console.log(err));
  }, []);
  const device = useSelector((state) => state.device);
  const admin = useSelector((state) => state.usuario);

  console.log("admin en app", admin);

  return admin ? (
    <>
      <div>
        <div style={{ position: "relative" }}>
          {device === "desk" ? <Navbar /> : <NavbarMobile />}
        </div>

        {device === "desk" ? (
          <div style={{ position: "absolute" }}>
            <Sidebar />
          </div>
        ) : (
          <></>
        )}

        <Routes>
          <Route path="/homemobile" element={<HomeMobile />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/client" element={<ClientFormNuevo />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<CardClient />} />
          <Route path="/edit/client/:id" element={<EditClient />} />
          <Route path="/security" element={<SecurityFormNuevo />} />
          <Route path="/status" element={<UserPage />} />
          <Route path="/user/info" element={<UserInfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/securities/:id" element={<Security />} />
          <Route path="/edit/security/:id" element={<EditSecurityNuevo />} />
          <Route path="/user/estadisticas" element={<EstadisticasUser />} />
          <Route path="/addbranchoffice" element={<BranchOfficeForm />} />
          <Route path="/search/branchoffice" element={<SearchBranchOffice />} />
          <Route path="/branch/:id" element={<CardBranchOffice />} />
          <Route path="/edit/branch/:id" element={<EditBranchOffice />} />
          <Route path="/search/securities" element={<SecurityList />} />
          <Route path="/user/avisos" element={<AvisosForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/assign" element={<AssignSecurity/>} />
          <Route path="/assign/branch/:id" element={<CalendarBranchFilter/>} />
        </Routes>
      </div>
    </>
  ) : (
    <>
      <div style={{ position: "relative" }}>
        {device === "desk" ? <Navbar /> : <NavbarMobile />}
      </div>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/homemobile" element={<HomeMobile />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
