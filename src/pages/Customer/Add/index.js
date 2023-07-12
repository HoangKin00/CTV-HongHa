import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './addCustomer.scss';
import Input from '../../../components/Input';
const data = {
  name: '',
  phone: '',
  email: '',
  address: '',
  gender: '',
  desiderate: '',
  age: '',
};
const AddCustomer = () => {
  const [info, setInfo] = useState(data);
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className='addCustomer'>
      <Link to={`/customer-list`} className='addCustomer__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='addCustomer__box'>
        <div className='addCustomer__title'>
          <span>Thêm mới khách hàng</span>
        </div>
        <div className='addCustomer__content'>
          <Input name='name' title={'Họ và tên'} value={info.name} handleValue={handleInfo} require={true} />
          <Input
            name='name'
            title={'Điểm đau (mong muốn)'}
            value={info.desiderate}
            handleValue={handleInfo}
            require={true}
          />
          <Input name='phone' title={'Số điện thoại'} value={info.phone} handleValue={handleInfo} require={false} />
          <Input name='address' title={'Địa chỉ'} value={info.address} handleValue={handleInfo} require={false} />
          <Input name='age' title={'Tuổi'} value={info.age} handleValue={handleInfo} require={false} />

          <div className='addCustomer__group'>
            <label>
              Giới tính<span>*</span>
            </label>
            <div className='addCustomer__gender'>
              <div className='addCustomer__men'>
                <input id='man' name='gender' type='radio' value='Nam' onChange={handleInfo} />
                <label htmlFor='man'>Nam</label>
              </div>
              <div className='addCustomer__men'>
                <input id='woman' name='gender' type='radio' value='Nữ' onChange={handleInfo} />
                <label htmlFor='woman'>Nữ</label>
              </div>
              <div className='addCustomer__men'>
                <input id='other' name='gender' type='radio' value='Khác' onChange={handleInfo} />
                <label htmlFor='other'>Khác</label>
              </div>
            </div>
          </div>
        </div>
        <div className='addCustomer__submit'>
          <button className='addCustomer__button'>Thêm mới</button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
