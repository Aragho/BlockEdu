import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";
import Login from "./component/Login"
import Signup from "./component/Signup"
import Credentials from "./component/Credentials";
import Sidebar from "./component/Sidebar"
import Dashboard1 from "./Page/Dashboard1";
import Dashboard2 from "./Page/Dashboard2";
import Loader from "./component/Loader";
import About from "./component/About";
import Contact from "./component/Contact";
import Logos from "./component/Logos";
<<<<<<< HEAD
=======
import ChangePassword from "./component/Changepassword";

>>>>>>> d233f4869d8234614186f014fcf003117fd27efb
import Linkpage from "./Page/Linkpage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/credentials" element={<Credentials/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/dashboard1" element={<Dashboard1/>}/>
        <Route path="/dashboard2" element={<Dashboard2/>}/>
        <Route path="loader" element={<Loader/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="logo" element={<Logos/>}/>
<<<<<<< HEAD
        <Route path="/linkpage/auth/:id" element={<Linkpage />} />
=======

        <Route path="/linkpage/auth/:id" element={<Linkpage />} />

        <Route path="change" element={<ChangePassword/>}/>
        <Route path="link" element={<Linkpage/>}/>

>>>>>>> d233f4869d8234614186f014fcf003117fd27efb
      </Routes>
    </Router>
  );
}

export default App;