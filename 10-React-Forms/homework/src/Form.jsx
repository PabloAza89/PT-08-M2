import React from "react";

function validate(input) {
  let error = {}
  if (!input.username) {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = "Username is invalid";
  }

  if (!input.password) {
    error.password = "Password is required";
  } else if (!/(?=.-*[0-9])/.test(input.password)) {
    error.password = "Password is invalid";
  }
  return error;
}

export default function Form() {
  let initialState = {
    username: "",
    password: "",
  };

  let [input, setInput] = React.useState(initialState);

  let [error, setError] = React.useState({});

  const handleInputChange = (e) => {
    // setInput({...input [e.target.name]: e.target.value});

    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    let objError = validate({...input, [e.target.name]: e.target.value})
    setError(objError);
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type={"text"}
          name={"username"}
          onChange={handleInputChange}
          value={input.username}
          className={error.username && 'danger'}
        />
        {
          error.username && <p>{error.username}</p>
        }
      </div>
      <div>
        <label>Password:</label>
        <input
          type={"password"}
          name={"password"}
          onChange={handleInputChange}
          value={input.password}
          // className={error.password && 'danger'}
        />
        {/* <p style={{visibility: error.username ? 'visible' : hidden}}></p> */}
        {
          error.password && <p>{error.password}</p>
        }
      </div>
      {/* <input type={"submit"} value={"Ingresar"} /> */}
      <button type={"submit"}>Submit</button>
    </form>
  );
}
