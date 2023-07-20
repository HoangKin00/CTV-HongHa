import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Service from './pages/Service';

import Customer from './pages/Customer';
import DetailCustomer from './pages/Customer/Detail';
import Login from './pages/Login';
import Financialreport from './pages/Report/FinancialReport';
import Servicereport from './pages/Report/ServiceReport';
import Infomation from './pages/Collaborator';
import Booking from './pages/Booking';

function App() {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />}></Route>

      <Route path={`/`} element={<Home />}>
        <Route path={`/`} element={<Navigate to={`/customer-list`} />} />
        <Route path={`/customer-list`} element={<Customer />} />
        <Route path={`/booking`} element={<Booking />} />
        <Route path={`/detail-customer/:id`} element={<DetailCustomer />} />

        {/* // */}

        <Route path={`/infomation`} element={<Infomation />} />

        <Route path={`/service-list`} element={<Service />} />

        {/* // */}
        <Route path='/report-service' element={<Servicereport />} />
        <Route path='/report-finance' element={<Financialreport />} />

        {/* // */}
        {/* <Route path='/infomation-manage' element={<InfoManage />}></Route>
        <Route path='/collaborators-list' element={<ListCollaborator />}></Route>
        <Route path='/collaborators-add' element={<AddCollaborator />}></Route>
        <Route path='/detail-collaborators/:id' element={<DetailCollaborator />} />
        <Route path='/customer-collaborators' element={<CustomerCollaborators />}></Route>
        <Route path='/collaborators-ratings' element={<RatingsCollaborators />}></Route>
        <Route path='/detail-ratingsCollaborators' element={<DetailRatingsCollaborators />}></Route>
        <Route path='/report-customer-manage' element={<ReportCustomer />}></Route>
        <Route path='/report-revennue-manage' element={<ReportRevenue />}></Route>
        <Route path='/report-service-manage' element={<ReportService />}></Route>
        <Route path='/report-total-service-manage' element={<TotalService />}></Route>
        <Route path='/report-detail-service-manage' element={<DetailService />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
