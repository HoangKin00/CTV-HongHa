import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import { PUBLIC_URL } from '../../utils/const';
import './service.scss';

const Service = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className='service'>
      <div className='service__box'>
        <div className='service__header'>
          <div className='service__title'>
            <span>Danh sách payment</span>
          </div>
        </div>
        <div className='service__tools'>
          <div className='service__search'>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
        </div>
        <div className='service__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Mã booking</th>
                <th>Tên</th>
                <th>Tiền thanh toán</th>
                <th>Đơn vị tiền tệ</th>
                <th>Trạng thái phiếu</th>
                <th>Hình thức thanh toán</th>
                <th>Loại thanh toán</th>
                <th>Ngày thanh toán</th>
              </tr>
              <tr>
                <td>00102</td>
                <td>Nguyễn Văn An</td>
                <td>10.000.000</td>
                <td>VND</td>
                <td>Đang xử lý</td>
                <td>Tiền mặt</td>
                <td>Hoa hồng</td>
                <td>21/01/2023</td>
              </tr>
              <tr>
                <td>00103</td>
                <td>Nguyễn Văn An 1</td>
                <td>10.000.000</td>
                <td>VND</td>
                <td>Đang xử lý</td>
                <td>Tiền mặt</td>
                <td>Hoa hồng</td>
                <td>21/01/2023</td>
              </tr>
              <tr>
                <td>00104</td>
                <td>Nguyễn Văn An 2</td>
                <td>10.000.000</td>
                <td>VND</td>
                <td>Đang xử lý</td>
                <td>Tiền mặt</td>
                <td>Hoa hồng</td>
                <td>21/01/2023</td>
              </tr>
            </tbody>
          </table>
          <div className='service__pagination'>
            <Pagination pageCount={10} pageNum={10} range={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
