import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout";
import Login from "./paginas/Login";
import SignUp from "./paginas/Sign-Up";
import { AuthProvider } from "./context/AuthProvider"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/> }/>
              <Route path="signup" element={<SignUp/>} />
          </Route>
          <Route>

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
