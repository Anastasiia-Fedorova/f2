import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';
import { history } from '../App';
import Dashboard from '../pages/dashboardpage/Dashboard';
import { LoginForm } from '../pages/LoginPage/LoginPage';
import { RegistrationForm } from '../pages/RegistrationPage/RegistrationPage';
import { IncomePage } from '../pages/incomespage/IncomePage';
import { ExpensesPage } from '../pages/expensespage/ExpensesPage';

const PrivateRoute = ({ children, auth }) => {
  if (!auth?.user_id) {
    return <Navigate to="/signin" />;
  }
  return children;
};

const GuestRoute = ({ children, auth }) => {
  if (auth?.user_id) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export const Main = ({auth}) =>

  <main >
    <BrowserRouter history = {history}>
      
        <Routes>
        
          <Route path="/signin"
            element={
              <GuestRoute auth={auth}>
                <LoginForm />
              </GuestRoute>
            }
          />
          <Route path="/signup"
            element={
              <GuestRoute auth={auth}>
                <RegistrationForm />
              </GuestRoute>
            }
          />

          <Route path="/dashboard"
            element={
              <PrivateRoute auth={auth}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/incomes"
            element={
              <PrivateRoute auth={auth}>
                <IncomePage/>
              </PrivateRoute>
            }
          />
          <Route path="/expenses"
            element={
              <PrivateRoute auth={auth}>
                <ExpensesPage/>
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
    
    </BrowserRouter>
  </main>