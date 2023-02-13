import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AUTH } from "../redux/auth/action";
const Login = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.Login);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  // const [inputValue, setinputValue] = React.useState([
  //   { email: "", password: "" },
  // ]);
  // const [handleError, sethandleError] = React.useState([
  //   { email: false, password: false },
  // ]);

  // const ChangeInputValue = (event) => {
  //   let Value = { ...inputValue };
  //   Value[event.target.name] = event.target.value;
  //   setinputValue(Value);
  // };

  const Login = (e) => {
    e.preventDefault();
    // const { email, password } = inputValue;

    // if (!email || !password) {
    //   if (!email) {
    //     handleError.name = true;
    //     sethandleError({ ...handleError });
    //   }
    //   if (!password) {
    //     handleError.name = true;
    //     sethandleError({ ...handleError });
    //   }
    // }

    dispatch(AUTH(email, password));
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Login}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id=""
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>

        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      {/* <form onSubmit={Login}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id=""
          value={inputValue.email}
          onChange={ChangeInputValue}
          className={`w-full border outline-none border-indigo-500/100 p-2 text-xs my-2 ${
            handleError.name && "border-red-500/100 "
          }`}
        />
        <br />
        <label htmlFor="password">Password</label>

        <input
          type="text"
          name="password"
          value={inputValue.password}
          onChange={ChangeInputValue}
          className={`w-full border outline-none border-indigo-500/100 p-2 text-xs my-2 ${
            handleError.name && "border-red-500/100 "
          }`}
        />
        <br />
        <button type="submit">submit</button>
      </form> */}
      <div>
        <p>{data?.email}</p>
        <p>{data?.firstName}</p>
        <p>{data?.lastName}</p>
        <p>{data?.role}</p>
      </div>
    </div>
  );
};

export default Login;
