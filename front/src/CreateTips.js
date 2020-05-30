import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

function CreateTips(props) {
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
    fetch("/register");
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
                  src="https://farm5.static.flickr.com/4016/4639061927_0363a38865.jpg"
                  alt="Prendas de vestir"
                ></img>
              </div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Crea un Consejo</h1>
                  </div>

                  <form
                    method="POST"
                    onSubmit={fetching}
                    enctype="multipart/form-data"
                  >
                    <div className="form-group">
                      <label className="label-input" htmlFor="image">
                        Upload an image
                      </label>
                      <input
                        className="form-control-file"
                        type="file"
                        name="image"
                        id="image"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="label-input" htmlFor="titulo">
                        Titulo
                      </label>
                      <input
                        type="text"
                        name="titulo"
                        id="titlo"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="label-input" htmlFor="descripcion">
                        Descripción
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        required
                      />
                    </div>

                    <div className="form-group col-lg-12">
                      <InputLabel htmlFor="region">Región</InputLabel>
                      <Select
                        native
                        className="form-control"
                        value={state.region}
                        onChange={handleChange}
                        inputProps={{
                          name: "region",
                          id: "region",
                        }}
                        name="region"
                      >
                        <option aria-label="None" value="" />
                        <option value="atlantica">Atlántica</option>
                        <option value="pacifica">Pacífica</option>
                        <option value="orinoquia">Orinoquía</option>
                        <option value="amazonas">Amazonas</option>
                        <option value="andina">Andina</option>
                      </Select>
                    </div>

                    <div className="form-group col-lg-12">
                      <InputLabel htmlFor="tags">
                        Seleccione la categoria
                      </InputLabel>
                      <Select
                        native
                        className="form-control"
                        value={state.tags}
                        onChange={handleChange}
                        inputProps={{
                          name: "tags",
                          id: "tags",
                        }}
                        name="tag"
                      >
                        <option aria-label="None" value="" />
                        <option value="agricultura">Agricultura</option>
                        <option value="ganaderia">Ganaderia</option>
                      </Select>
                    </div>

                    <div className="form-group">
                      <label
                        className="label-input"
                        htmlFor="phone_register"
                        className="primary"
                      >
                        Número de celular
                      </label>
                      <input
                        type="number"
                        name="phoneRegister"
                        id="phoneRegister"
                        className="form-control"
                        required
                      />
                    </div>
                    <button type="submit" className="btn">
                      Crear
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

export default CreateTips;
