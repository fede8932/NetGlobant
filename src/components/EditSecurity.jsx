import React from "react";

const EditSecurity = () => {
  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold">Pepe Argento</span>
            <span class="text-black-50">pepe@gmail.com</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Editar Perfil</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="col-md-6">
                <label class="labels">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellido"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">CUIL</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese el CUIL"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Provincia</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese la provincia"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese el email"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Provincias habilitadas</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese las provincias separadas por una coma"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSecurity;
