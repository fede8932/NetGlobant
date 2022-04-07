import "../style/estilos.scss";
import Footer from "./Footer"

const Home = function () {
  return (
    <>
      <div className="home">
      </div>
      <div className="footer">
          <p className="nav col-md-4 justify-content-end list-unstyled d-flex mt-3">© 2022 Bootcamp Enero, Inc</p>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mt-3 ">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
