import React, { useEffect, useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
// import Pagination from '../../components/Pagination';
import './customer.scss';
// import { customerList } from '../../routes/route';
// import CustomerList from '../../components/CustomerList';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetBooking } from '../../services/bookingService';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../utils/styleCustomTable';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  const { dataBooking, isSuccessBooking } = useGetBooking(token);
  useEffect(() => {
    if (isSuccessBooking) {
      setData(dataBooking.data.result.data)
    }
  }, [isSuccessBooking, dataBooking]);
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
      setData(dataBooking.data.result.data);
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
      setData(dataBooking.data.result.data);
    }
  }
  const readMore = (id) => {
    navigate(`/detail-customer/${id}`);
  }
  const columns = [
    {
      name: 'Mã KH',
      selector: (row) => row.code,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
    },
    {
      name: 'Số điện thoại',
      selector: (row) => row.phone,
    },
    {
      name: 'Nhóm KH',
      selector: (row) => row.status,
    },
    {
      name: 'Ngày tạo',
      selector: (row) => new Date(row.reception_date).toLocaleDateString('en-GB'),
    },
    {
      name: 'Hành động',
      cell: (row) => <button onClick={() => readMore(row.code)}>Xem thêm</button>,
      right: true,
      grow: 0.5
    },
  ]

  return (
    <div className='customer'>
      <div className='customer__box'>
        <div className='customer__header'>
          <div className='customer__title'>
            <span>Tất cả khách hàng</span>
            <div className='customer__add'>
              {/* <Link to={`/add-customer`} className='customer__button'>
                + Thêm khách hàng
              </Link> */}
            </div>
          </div>
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
          <div className='customer__date'>
            <b>Chọn ngày</b>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
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
                <th>Giới tính</th>
                <th>Nhóm KH</th>
                <th>Ngày tạo</th>
              </tr>
              {customerList.map((item) => (
                <CustomerList key={item.name} {...item} />
              ))}
            </tbody>
          </table>
        </div>
        <div className='customer__pagination'>
          <Pagination pageCount={5} pageNum={5} range={6} />
        </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Customer;
