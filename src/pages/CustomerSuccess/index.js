import React, { useEffect, useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
// import Pagination from '../../components/Pagination';
import './customer.scss';
// import { customerList } from '../../routes/route';
// import CustomerList from '../../components/CustomerList';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../utils/styleCustomTable';
import { formatMoney } from '../../utils/formatMoney';
import { useNavigate } from 'react-router-dom';
import { useGetInvoice } from '../../services/invoiceService';

const CustomerSuccess = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  const { dataInvoice, isSuccessInvoice } = useGetInvoice(token);
  console.log("dataInvoice: ", dataInvoice);
  useEffect(() => {
    if (isSuccessInvoice) {
      setData(dataInvoice.data.result)
    }
  }, [isSuccessInvoice, dataInvoice]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearch = () => {
    if (search) {
      const dataFilter = data.filter(item => {
        return item.name === search
      });
      setData(dataFilter);
    } else {
      setData(dataInvoice.data.result);
    }
  }
  const handleSubmitFilter = (e) => {
    setFilter(e.target.value);
    if (e.target.value) {
      const dataFilter = data.filter(item => {
        return item.status === e.target.value
      });
      setData(dataFilter);
    } else {
      setData(dataInvoice.data.result);
    }
  }
  const readMore = (id) => {
    navigate(`/detail-customer-success/${id}`);
  }
  const columns = [
    {
      name: 'Mã KH',
      selector: (row) => row.revenue_book,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.stage,
    },
    {
      name: 'Tổng tiền',
      selector: (row) => formatMoney(row.amount),
    },
    {
      name: 'Hành động',
      cell: (row) => <button onClick={() => readMore(row.revenue_book)}>Xem thêm</button>,
      right: true,
      grow: 0.5
    },
  ]

  return (
    <div className='customer'>
      <div className='customer__add'>
        {/* <Link to={`/add-customer`} className='customer__button'>
          + Thêm khách hàng
        </Link> */}
      </div>
      <div className='customer__box'>
        <div className='customer__title'>
          <span>Khách hàng thành công</span>
        </div>
        <div className='customer__tools'>
          <div className='customer__search'>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button onClick={handleSubmitSearch}>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className='customer__filter'>
            <select name='filter' onChange={handleSubmitFilter} value={filter}>
              <option value=''>Tất cả khách hàng</option>
              <option value='Đến cửa'>Đến cửa</option>
              <option value='Thành công'>Thành công</option>
              <option value='Không thành công'>Không thành công</option>
            </select>
          </div>
        </div>
        <div className='customer__content'>
          <DataTable columns={columns} data={data} highlightOnHover pagination customStyles={customStyles} />
          {/* <table className='table'>
            <tbody>
              <tr>
                <th>Mã KH</th>
                <th>Tên KH</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Nhóm KH</th>
                <th>Ngày tạo</th>
              </tr>
              {customerList.map((item) => (
                <CustomerList key={item.name} {...item} />
              ))}
            </tbody>
          </table>
          <div className='customer__pagination'>
            <Pagination pageCount={10} pageNum={10} range={6} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
