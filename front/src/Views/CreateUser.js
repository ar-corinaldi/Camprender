import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

function CreateUser(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  const fetching = async () => {
    fetch("/registerUser");
  };

  const [state, setState] = React.useState({
    name: "hai",
    region: "",
    tags: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div
                className="col-lg-6 d-none d-lg-block bg-login-image"
                id="bg-login-image"
              >
                {" "}
                <img
                  width="450"
                  height="740"
                  src="https://p1.pxfuel.com/preview/829/810/340/doubt-human-resources-fruits-and-vegetables-good-morning.jpg"
                  alt="Prendas de vestir"
                ></img>
              </div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      {" "}
                      Primero crea tu usuario{" "}
                    </h1>
                  </div>

                  <form method="POST" onSubmit={fetching}>
                    <div className="form-group">
                      <label className="label-input" htmlFor="nombre">
                        ¿Cuál es tu nombre?
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="label-input" htmlFor="apellido">
                        ¿Cuál es tu apellido?
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="apellido"
                        id="apellido"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label
                        className="label-input"
                        htmlFor="phone_register"
                        className="primary"
                      >
                        ¿Cuál es tu número de telefono?
                      </label>
                      <input
                        type="number"
                        name="telefono"
                        id="telefono"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="label-input" htmlFor="password">
                        Escoge tu contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="passwordRegister"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="label-input"
                        htmlFor="password2Register"
                      >
                        Confirma tu Contraseña
                      </label>
                      <input
                        type="password"
                        name="password2Register"
                        id="password2Register"
                        className="form-control"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      //className="btn"
                    >
                      Registrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
