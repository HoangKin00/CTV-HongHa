import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import Registercontract from '../Registercontract';
import './contract.scss';

const Contract = () => {
  const [isContract, setIsContract] = useState(false);
  return (
    <div className='contract'>
      <Link to={`/collaborator`} className='contract__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>

      {isContract ? (
        <Registercontract />
      ) : (
        <div className='contract__box'>
          <div className='contract__title'>
            <span>Thông tin hợp đồng</span>
            <p>Bạn đã ký hợp đồng với chúng tôi</p>
          </div>
          <div className='contract__content'>
            <div className='contract__group'>
              <label>Bên A</label>
              <input type='text' value='Nguyen Van A' disabled />
            </div>
            <div className='contract__group'>
              <label>Bên B</label>
              <input type='text' value='benhvienhongha' disabled />
            </div>
          </div>
          <div className='contract__content'>
            <div className='contract__group'>
              <label>
                Ngày ký hợp đồng<span>*</span>
              </label>
              <input type='text' value='01/01/2021' disabled />
            </div>
            <div className='contract__group'>
              <label>
                Doanh số cam kết / tháng <span>*</span>
              </label>
              <input type='text' value='500.000.000đ' disabled />
            </div>
          </div>
          <div className='contract__content'>
            <div className='contract__group'>
              <label>
                Ngày hết hạn hợp đồng<span>*</span>
              </label>
              <input type='text' value='01/01/2023' disabled />
            </div>
          </div>
          <div className='contract__des'>
            <b>Chi tiết hợp đồng</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore tenetur cum voluptatum quia veniam,
            assumenda, at praesentium in amet illo impedit dolor, natus iusto ad dolorem. Maiores, perferendis placeat?
          </div>
        </div>
      )}
    </div>
  );
};

export default Contract;
