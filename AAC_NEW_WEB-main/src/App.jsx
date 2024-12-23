import React, { useState,useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import Cookies from 'universal-cookie';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

import Blogs from "./pages/Blogs";
import About from "./pages/About"; // Assuming "Team" is represented by About
import Contactus from "./pages/Contactus";
//import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Footer from "./partials/Footer";

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
export default App;
//................................................................................................................................
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import "aos/dist/aos.css";
// import "./css/style.css";

// import AOS from "aos";
// import Cookies from "universal-cookie";

// // Importing the required components
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import About from "./pages/About"; // Assuming "Team" is represented by About
// import Contactus from "./pages/Contactus";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Footer from "./components/Footer";

// function App() {
//   const cookies = new Cookies();
//   const [isLogin, setLogin] = useState(false);
//   const [callCount, setCallCount] = useState(0);
//   const [token, setToken] = useState(cookies.get("authToken"));
//   const [user, setUser] = useState({
//     isAdmin: false,
//   });

//   const location = useLocation();

//   useEffect(() => {
//     AOS.init({
//       once: true,
//       disable: "phone",
//       duration: 600,
//       easing: "ease-out-sine",
//     });
//   }, []);

//   useEffect(() => {
//     document.querySelector("html").style.scrollBehavior = "auto";
//     window.scroll({ top: 0 });
//     document.querySelector("html").style.scrollBehavior = "";
//   }, [location.pathname]);

//   useEffect(() => {
//     if (callCount === 0) {
//       isLoggedin();
//     }
//   });

//   function isLoggedin() {
//     if (cookies.get("authToken") === undefined) {
//       setCallCount(callCount + 1);
//       return;
//     } else {
//       axios
//         .get("http://localhost:5000/user/getUserInfo", {
//           params: {
//             token: cookies.get("authToken"),
//           },
//         })
//         .then((res) => {
//           setLogin(res.data.isLoggedin);
//           setUser(res.data.user);
//           setCallCount(callCount + 1);
//         });
//     }
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Navbar can be added here if needed */}
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Home
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route
//           path="/blogs"
//           element={
//             <Blogs
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route
//           path="/team"
//           element={
//             <About
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <Contactus
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <Signup
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <Login
//               isLogin={isLogin}
//               setLogin={setLogin}
//               user={user}
//               setUser={setUser}
//               token={token}
//               setToken={setToken}
//             />
//           }
//         />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;
