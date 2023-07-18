import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import Pagination from '../../components/Pagination';
import './customer.scss';
import { customerList } from '../../routes/route';
import CustomerList from '../../components/CustomerList';

const Customer = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='customer'>
      <div className='customer__box'>
        <div className='customer__header'>
          <div className='customer__title'>
            <span>Tất cả khách hàng</span>
            <div className='customer__add'>
              <Link to={`/add-customer`} className='customer__button'>
                + Thêm khách hàng
              </Link>
            </div>
          </div>
        </div>
        <div className='customer__tools'>
          <div className='customer__search'>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className='customer__filter'>
            <select name='filter' onChange={handleFilter} value={filter}>
              <option value='Tất cả khách hàng'>Tất cả khách hàng</option>
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
          <table className='table'>
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
        </div>
      </div>
    </div>
  );
};

export default Customer;
