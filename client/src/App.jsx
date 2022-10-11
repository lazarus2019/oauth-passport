import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";
import PostList from "./pages/Post/PostList";
import "./scss/_index.scss";

function App() {
  const user = {
    picture: "https://avatars.githubusercontent.com/u/62226062?v=4",
    name: "Lazarus",
  };
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
