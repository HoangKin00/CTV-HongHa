import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Financialreport from './pages/Report/FinancialReport';
import Servicereport from './pages/Report/ServiceReport';
import Infomation from './pages/Collaborator';
import Booking from './pages/Booking';
import DetailBooking from './pages/Booking/DetailBooking';
import Payment from './pages/Payment';

function App() {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />}></Route>

      <Route path={`/`} element={<Home />}>
        <Route path={`/`} element={<Navigate to={`/customer-list`} />} />
        <Route path={`/customer-list`} element={<Customer />} />
        <Route path={`/booking`} element={<Booking />} />
        <Route path={`/booking/detail`} element={<DetailBooking />} />

        {/* // */}

        <Route path={`/infomation`} element={<Infomation />} />

        <Route path={`/payment`} element={<Payment />} />

        {/* // */}
        <Route path='/report-service' element={<Servicereport />} />
        <Route path='/report-finance' element={<Financialreport />} />
      </Route>
    </Routes>
  );
}

export default App;
