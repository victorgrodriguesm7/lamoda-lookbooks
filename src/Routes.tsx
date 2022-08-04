import {
    BrowserRouter,
    Routes as Switch,
    Route,
} from "react-router-dom";
import { PrivateRoute } from "./components/Admin";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/admin/home" element={<AdminHome/>}/>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}
