import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = () => {
  useEffect(() => {
    document.title = "SignUp";
  }, []);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      navigate("/Login"); // Redirect to home after successful signup
    },
  });

  return (
    <StyledWrapper>
      <div className="container">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            signUp({
              variables: {
                email: values.email,
                username: values.username,
                password: values.password,
              },
            });
          }}
        >
          <p className="title">SignUp Form</p>
          <input
            placeholder="Username"
            className="username input"
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <input
            placeholder="Email"
            className="email input"
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <input
            placeholder="Password"
            className="password input"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <button className="btn" type="submit">
            {loading ? "Signing up..." : "SignUp"}
          </button>
          {error && <p className="error">{error.message}</p>}
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ::selection {
    background-color: gray;
  }

  .container {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 400px;
    height: 500px;
    background-image: linear-gradient(to bottom, #424242, #212121);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
  }

  .title {
    color: wheat;
    margin: 3rem 0;
    font-size: 2rem;
  }

  .input {
    margin: 0.5rem 0;
    padding: 1rem 0.5rem;
    width: 20rem;
    background-color: inherit;
    color: wheat;
    border: none;
    outline: none;
    border-bottom: 1px solid wheat;
    transition: all 400ms;
  }

  .input:hover {
    background-color: #424242;
    border: none;
    border-radius: 0.5rem;
  }

  .btn {
    height: 3rem;
    width: 20rem;
    margin-top: 3rem;
    background-color: wheat;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.2rem;
    transition: all 400ms;
    cursor: pointer;
    box-shadow: 0 0 10px antiquewhite, 0 0 10px antiquewhite;
  }

  .btn:hover {
    background-color: antiquewhite;
    box-shadow: none;
  }

  .error {
    color: red;
    margin-top: 1rem;
  }
`;

export default SignUp;
