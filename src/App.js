import Homepage from "./pages/homepage";
import Registrationpage from "./pages/Registrationpage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Userlistpage from "./pages/userlistpage";
import Editpage from "./pages/editpage";
import Loginpage from "./pages/loginpage";



function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Registration" element={<Registrationpage/>}/>
        <Route path="/Userlist" element={<Userlistpage/>}/>
        <Route path="/edit/:id" element={<Editpage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;
