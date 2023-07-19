import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout";
import Login from "./paginas/Login";
import SignUp from "./paginas/Sign-Up";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Login/> }/>
            <Route path="signup" element={<SignUp/>} />
        </Route>
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
