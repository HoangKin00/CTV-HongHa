import React, { useState } from 'react';
import { PUBLIC_URL } from '../../../utils/const';
import './servicereport.scss';

const Servicereport = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className='servicereport'>
      <div className='servicereport__box'>
        <div className='servicereport__header'>
          <div className='servicereport__title'>
            <span>Danh sách phiếu chi hoa hồng</span>
          </div>
        </div>
        <div className='servicereport__tools'>
          <div className='customer__search'>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className='servicereport__filter'>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='Đến cửa'>1 ngày trước</option>
              <option value='Thành công'>7 ngày trước</option>
              <option value='Không thành công'>1 tháng trước</option>
            </select>
          </div>
          <div className='servicereport__date'>
            <b>Chọn ngày</b>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
        </div>
        <div className='servicereport__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>STT</th>
                <th>Trạng thái</th>
                <th>Ghi chú</th>
                <th>Số tiền chi</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Đang xử lý</td>
                <td>Trống</td>
                <td>100.000 VND</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Đang xử lý</td>
                <td>Trống</td>
                <td>100.000 VND</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Đang xử lý</td>
                <td>Trống</td>
                <td>100.000 VND</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Đang xử lý</td>
                <td>Trống</td>
                <td>100.000 VND</td>
              </tr>
            </tbody>
          </table>
          <div className='servicereport__group'>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Tổng</td>
                  <td></td>
                  <td></td>
                  <td>100.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicereport;
