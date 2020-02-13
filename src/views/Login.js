import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../common/Layout";

import ReactDOM from "react-dom";
// import { FaInstagram } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const LOGIN = gql`
  mutation log($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      message
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [execMutation, { data, loading, error }] = useMutation(LOGIN);
  if (!loading) console.log(data);

  const submit = event => {
    event.preventDefault();
    execMutation({ variables: { email, password } });
  };

  return (
    <Layout>
      <div className="row my-5">
        <form className="col-12" onSubmit={submit}>
          <div className="row justify-content-center">
            <div className="form-group col-8 ">
              <label>Email: </label>
              <input
                name="email"
                type="email"
                placeholder="example@example"
                className="form-control "
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group col-8">
              <label>password: </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>

            <div className="col-8">
              <button type="submit" className="btn bg-dark text-light ">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
