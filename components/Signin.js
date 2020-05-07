import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./Nav";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signinMutation,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(SIGNIN_MUTATION);

  return (
    <Form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        await signinMutation({
          variables: { email, password },
          refetchQueries: [{ query: CURRENT_USER_QUERY }]
        });
        setEmail("");
        setPassword("");
      }}
    >
      <fieldset disabled={mutationLoading} aria-busy={mutationLoading}>
        <h2>Sign into your account</h2>
        <Error error={mutationError} />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  );
};

export default Signin;
