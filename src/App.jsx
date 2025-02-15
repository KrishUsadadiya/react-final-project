
import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import Header from "./components/header";
import Home from "./components/home";
import { Route, Routes } from "react-router";
import Addstudent from "./components/addstudent";
import Editstudent from "./components/editstudent";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<Addstudent/>} />
        <Route path="/edit/:id" element={<Editstudent />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
