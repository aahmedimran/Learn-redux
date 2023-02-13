import "./App.css";
import Approutes from "./router/Approutes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        let response = await axios.get("http://localhost:3001/api/Profile", {
          withCredentials: true,
        });
        console.log("🚀 ~ file: App.js:10 ~ getUser ~ response", response);
        if (response.status === 200) {
          console.log("response : ", response.data);

          dispatch({ type: "Login_User_SUCCESS", payload: response.data.profile });
        } else {
          dispatch({ type: "Login_User_FAIL" });
        }
      } catch (e) {
        console.log("🚀 ~ file: App.js:16 ~ getUser ~ e", e);
      }
    };

    getUser();
  }, [dispatch]);
  return (
    <div className="App">
      <Approutes />
    </div>
  );
}

export default App;
