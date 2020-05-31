import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  const refTelefono = useRef();
  const refPassword = useRef();
  const fetching = (e) => {
    e.preventDefault();
    let user = {
      telefono: refTelefono.current.value,
      password: refPassword.current.value,
    };
    props.setUser(user);
    history.goBack();
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
                  height="600"
                  src="https://s3.amazonaws.com/elcomun/imagenes/1528219067.jpg"
                  alt="Prendas de vestir"
                ></img>
              </div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Login</h1>
                  </div>

                  <form onSubmit={fetching}>
                    <div className="form-group">
                      <label className="label-input" htmlFor="telefono">
                        <p>Telefono</p>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="telefono"
                        required
                        ref={refTelefono}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label-input" htmlFor="password">
                        <p>Password</p>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        required
                        ref={refPassword}
                      />
                    </div>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                  <div className="register">
                    <Link
                      style={{ WebkitTextFillColor: "black" }}
                      className="label-input"
                      to="/register"
                    >
                      <p>Don't have an account? Sign up</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
