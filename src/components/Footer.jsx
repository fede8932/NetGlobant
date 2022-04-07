import * as React from "react";

const Footer = function () {
  return (
    <div
      id="footer"
      className="container"
      style={{
        position: "fixed",
        width: "100%",
      }}
    >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2022 Bootcamp Enero, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
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
      </footer>
    </div>
  );
};
export default Footer;
