import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Customer from './pages/Customer';
import Infomation from './pages/Collaborator';
import Login from './pages/Login'
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Invoice from './pages/Invoice';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  return (
    <Routes>
      <Route index element={token ? <Navigate to="/customer-list" replace /> : <Navigate to="/login" replace />}></Route>

      <Route path={`/login`} element={<Login />} />
      <Route path={`/`} element={<Home />}>
        <Route path={`/`} element={<Navigate to={`/customer-list`} />} />
        <Route path={`/customer-list`} element={<Customer />} />
        <Route path={`/booking`} element={<Booking />} />

        {/* // */}

        <Route path={`/infomation`} element={<Infomation />} />

        <Route path={`/payment`} element={<Payment />} />

        <Route path={`/invoice`} element={<Invoice />} />
      </Route>
    </Routes>
  );
}

export default App;
