import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './detailregistcontract.scss';
import Input from '../../../components/Input';
const data = {
  name: '',
  phone: '',
  email: '',
  address: '',
  gender: '',
  commit: '',
  identification: '',
};
const Detailregistcontract = () => {
  const [info, setInfo] = useState(data);
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className='detailregistcontract'>
      <Link to={`/contract`} className='detailregistcontract__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='detailregistcontract__box'>
        <div className='detailregistcontract__title'>
          <span>Đăng ký hợp đồng</span>
          <p>Vui lòng điền thông tin chính xác</p>
        </div>

        <div className='detailregistcontract__content'>
          <Input name='name' title={'Họ và tên'} value={info.name} handleValue={handleInfo} require={true} />
          <Input name='phone' title={'Số điện thoại'} value={info.phone} handleValue={handleInfo} require={true} />
          <Input name='email' title={'Email'} value={info.email} handleValue={handleInfo} require={false} />
          <Input name='address' title={'Địa chỉ'} value={info.address} handleValue={handleInfo} require={false} />
          <Input name='gender' title={'Giới tính'} value={info.gender} handleValue={handleInfo} require={false} />
          <Input
            name='commit'
            title={'Cam kết doanh số / tháng'}
            value={info.commit}
            handleValue={handleInfo}
            require={true}
          />
          <Input
            name='identification'
            title={'CCCD'}
            value={info.identification}
            handleValue={handleInfo}
            require={true}
          />
        </div>
        <div className='detailregistcontract__submit'>
          <button className='detailregistcontract__button'>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Detailregistcontract;
