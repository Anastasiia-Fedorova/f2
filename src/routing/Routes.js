import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';
import { history } from '../App';
import Dashboard from '../pages/dashboardpage/Dashboard';
import { LoginForm } from '../pages/LoginPage/LoginPage';
import { RegistrationForm } from '../pages/RegistrationPage/RegistrationPage';

export const Main = ({auth}) =>

  <main >
    <BrowserRouter history = {history}>
      
        <Routes>
        
          <Route path={'/'} element={<LoginForm/>} />
          <Route path={'/signin'} element={<LoginForm/>} />
          <Route path={'/signup'} element={<RegistrationForm/>} />
          <Route path={'/dashboard'} element={<Dashboard/>} />

          {/* <Route exact path="/"> <Navigate to="/login" /> </Route> */}
        </Routes>
    
    </BrowserRouter>
  </main>