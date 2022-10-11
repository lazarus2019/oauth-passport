import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";
import PostList from "./pages/Post/PostList";
import "./scss/_index.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
