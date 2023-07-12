import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './service.scss';

const Service = () => {
  return (
    <div className='service'>
      <div className='service__name'>Thông tin dịch vụ</div>
      <div className='service__box'>
        <div className='service__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
                <th>Giá</th>
                <th>Hoa hồng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>6.000.000</td>
                <td>600.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nâng mũi</td>
                <td>40.000.000</td>
                <td>4.000.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hút mỡ</td>
                <td>40.000.000</td>
                <td>4.000.000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Nâng ngực</td>
                <td>70.000.000</td>
                <td>7.000.000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Phun xăm</td>
                <td>2.000.000</td>
                <td>200.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Service;
