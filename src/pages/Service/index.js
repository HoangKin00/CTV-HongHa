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
            <span>Tất cả dịch vụ</span>
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
                <th>STT</th>
                <th>Tên dịch vụ</th>
                <th>Giá gốc</th>
                <th>Giá KM</th>
                <th>Hoa hồng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>10.000.000</td>
                <td>6.000.000</td>
                <td>600.000</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>10.000.000</td>
                <td>6.000.000</td>
                <td>600.000</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>10.000.000</td>
                <td>6.000.000</td>
                <td>600.000</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>10.000.000</td>
                <td>6.000.000</td>
                <td>600.000</td>
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
