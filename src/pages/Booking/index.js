import React, { useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
import Pagination from '../../components/Pagination';
import {  customerListBooking } from '../../routes/route';
import CustomerList from '../../components/CustomerList';

const Booking = () => {
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
            <span>Danh sách booking</span>
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
                <th>Tên</th>
                <th>Trạng thái</th>
                <th>Ngày đến cửa</th>
                <th>Danh sách dịch vụ</th>
                <th>Tiền đã thu</th>
                <th>Tiền chi phí</th>
                <th>Tiền miễn giảm</th>
              </tr>
              {customerListBooking.map((item) => (
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

export default Booking;
