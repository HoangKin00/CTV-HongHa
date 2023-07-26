import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Infomation from './pages/Collaborator';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Invoice from './pages/Invoice';

function App() {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />}></Route>

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
