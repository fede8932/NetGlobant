import CalendarClientFilter from "./CalendarClientFilter";

const AssignSecurity = () => {
  return (
    <div style={{ position: "relative", top: "50px", left: "300px" }}>
      <p>
        En esta sección se podrán asignar vigiladores a sucursales,
        <br /> para luego poder otorgarles un horario de trabajo.
      </p>
      <br></br>
      <p>
        <strong>Elige un cliente</strong>
      </p>
      <div>
        <CalendarClientFilter />
      </div>
    </div>
  );
};

export default AssignSecurity;
