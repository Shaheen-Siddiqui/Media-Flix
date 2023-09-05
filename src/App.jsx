import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import { RedirectAuth } from "./utils/redirectAuth";

const Home = lazy(() => import("./pages/home/Home"));
const WatchLater = lazy(() => import("./pages/WatchLater"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const Header = lazy(() => import("./components/header/Header"));
const Login = lazy(() => import("./pages/authentication/Login"));
const PlayList = lazy(() => import("./pages/playlist/PlayList"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
const SignUp = lazy(() => import("./pages/authentication/SignUp"));
const VideoListing = lazy(() => import("./pages/videoListing/VideoListing"));

function App() {
  const [toggleSibebar, setToggleSidebar] = useState(false);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
              fontSize: "2rem",
            },
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <Header
          setToggleSidebar={setToggleSidebar}
        />

        <Sidebar
          toggleSibebar={toggleSibebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="right-side-components">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/explore" element={<Explore />} />

            {/* *****---------PRIVATE ROUTES----------*** */}
            <Route
              path="/"
              element={
                <RedirectAuth>
                  <Home />
                </RedirectAuth>
              }
            />
            <Route
              path="/playlist"
              element={
                <RedirectAuth>
                  <PlayList />
                </RedirectAuth>
              }
            />
            <Route
              path="/listing"
              element={
                <RedirectAuth>
                  <VideoListing />
                </RedirectAuth>
              }
            />
            <Route
              path="/watchlater"
              element={
                <RedirectAuth>
                  <WatchLater />
                </RedirectAuth>
              }
            />
            {/* *****-----------------------------*** */}
          </Routes>
        </div>
      </Suspense>
      {/* I Have to Make this aap using React, Firebase, Redux, Testing || I will store data in cookies */}
    </div>
  );
}

export default App;
