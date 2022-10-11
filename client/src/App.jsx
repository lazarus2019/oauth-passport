import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";
import PostList from "./pages/Post/PostList";
import "./scss/_index.scss";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `http://localhost:5000/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        setUser(data.user._json);

        // Save to localhost or redux store
        // const userInfo = {
        //   email: data.user._json.email,
        //   verified: data.user._json.email_verified,
        //   name: data.user._json.name,
        //   avatar: data.user._json.picture,
        // };
        // console.log(userInfo);
        // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/post">
            <Route path=":id" element={<Post />} />
          </Route>

          {/* Protected will be here */}
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
