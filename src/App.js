import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Collaborator from './pages/Collaborator';
import Contract from './pages/Collaborator/Contract';
import Detailregistcontract from './pages/Collaborator/Detailregistcontract';
import Infomation from './pages/Collaborator/Infomation';
import Service from './pages/Service';
import Registercontract from './pages/Collaborator/Registercontract';

import Customer from './pages/Customer';
import AddCustomer from './pages/Customer/Add';
import DetailCustomer from './pages/Customer/Detail';
import Login from './pages/Login';
import Financialreport from './pages/Report/FinancialReport';
import Servicereport from './pages/Report/ServiceReport';

function App() {
  return (
    <Routes>
      <Route path={`/login`} element={<Login />}></Route>

      <Route path={`/`} element={<Home />}>
        <Route path={`/`} element={<Navigate to={`/customer-list`} />} />
        <Route path={`/customer-list`} element={<Customer />} />
        <Route path={`/add-customer`} element={<AddCustomer />} />
        <Route path={`/detail-customer/:id`} element={<DetailCustomer />} />

        {/* // */}

        <Route path={`/collaborator`} element={<Collaborator />} />
        <Route path={`/infomation`} element={<Infomation />} />

        <Route path={`/contract`} element={<Contract />} />
        <Route path={`/register-contract`} element={<Registercontract />} />
        <Route path={`/detail-regist-contract`} element={<Detailregistcontract />} />

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
