import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import Home from "./pages/restaurant/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/admin/" element={<Admin />}/>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/:urlSite">
                  <Route path="" element={<Home/>}/>
              </Route>
              <Route path="404" element={<NotFound/>} />
          </Routes>

      </BrowserRouter>
  );
}

export default App;
