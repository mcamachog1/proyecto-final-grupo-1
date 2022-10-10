import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <div className="heading">
          <h2>Register</h2>
          <div className="">
            <form action="#">
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email"
                />
              </div>
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="text-center mt-5">
        <form>
          <input type="text" placeholder="usuario" />
          <input type="password" placeholder="password" />
        </form>
      </div> */}
    </div>
  );
};
