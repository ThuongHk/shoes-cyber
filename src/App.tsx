import { Route, Routes } from "react-router-dom";
import TemplateDeafault from "./template/templateDeafault/TemplateDeafault";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Detail from "./pages/detail/Detail";
import Register from "./pages/register/Register";


function App() {
  return (
    <div className="App">
    <Routes>
     <Route path='' element={<TemplateDeafault/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='detail/:id' element={<Detail/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='*' element={<Home/>}/>
     </Route>
    </Routes>
    </div>
  );
}

export default App;
