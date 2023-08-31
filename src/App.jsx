import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const VideoListing = lazy(() => import("./pages/videoListing/VideoListing"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
const SignUp = lazy(() => import("./pages/authentication/SignUp"));
const Login = lazy(() => import("./pages/authentication/Login"));
const PlayList = lazy(() => import("./pages/playlist/PlayList"));
const Header = lazy(() => import("./components/header/Header"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const WatchLater = lazy(() => import("./pages/WatchLater"));
const Home = lazy(() => import("./pages/home/Home"));

function App() {
  const [toggleSibebar, setToggleSidebar] = useState(false);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Header setToggleSidebar={setToggleSidebar} />

        <Sidebar
          toggleSibebar={toggleSibebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="right-side-components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/listing" element={<VideoListing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Routes>
        </div>
      </Suspense>
      {/* I Havr to Make this aap using React, Firebase, Redux, Testing || I will store data in cookies */}
    </div>
  );
}

export default App;
