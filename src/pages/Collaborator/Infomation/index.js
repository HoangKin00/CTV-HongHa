import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './infomation.scss';
import Input from '../../../components/Input';

const data = {
  name: 'Phạm Thanh Hoa',
  phone: '0987654321',
  email: 'hoa@gmail.com',
  address: 'Hà Nội',
  gender: 'Nữ',
  rank: 'Hạng A',
  manager: 'Nguyễn Văn B',
  date: '22/01/2022',
};
const Infomation = () => {
  const [isEditInfo, setIsEditInfo] = useState(true);
  const [info, setInfo] = useState(data);
  const [password, setPassword] = useState({ password: '', newPassword: '', retypePassword: '' });
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handlePassword = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleIsEditInfo = () => {
    setIsEditInfo(!isEditInfo);
  };
  return (
    <div className='infomation'>
      <Link to={`/collaborator`} className='infomation__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='infomation__box'>
        <div className='infomation__title'>
          <span>Thông tin tài khoản</span>
          <p>Các thông tin cơ bản của tài khoản đang đăng nhập hệ thống</p>
        </div>
        <div className='infomation__content'>
          <Input
            name='name'
            title={'Họ và tên'}
            value={info.name}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={true}
          />
          <Input
            name='phone'
            title={'Số điện thoại'}
            value={info.phone}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={true}
          />
          <Input
            name='email'
            type='email'
            title={'Email'}
            value={info.email}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={false}
          />
          <Input
            name='address'
            title={'Địa chỉ'}
            value={info.address}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={false}
          />
          <Input
            name='gender'
            title={'Giới tính'}
            value={info.gender}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={false}
          />
          <Input
            name='rank'
            title={'Hạng thành viên'}
            value={info.rank}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={true}
          />
          <Input
            name='manager'
            title={'Quản lý trực tiếp'}
            value={info.manager}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={false}
          />
          <Input
            name='date'
            title={'Ngày vào'}
            value={info.date}
            handleValue={handleInfo}
            disable={isEditInfo}
            require={false}
          />
        </div>
        <div className='infomation__submit'>
          {isEditInfo ? (
            <button className='infomation__button' onClick={handleIsEditInfo}>
              Chỉnh sửa
            </button>
          ) : (
            <div className='infomation__control'>
              <button className='infomation__button' onClick={handleIsEditInfo}>
                Hủy bỏ
              </button>
              <button className='infomation__button' onClick={handleIsEditInfo}>
                Cập nhật
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='infomation__box'>
        <div className='infomation__title'>
          <span>Đặt lại mật khẩu</span>
        </div>
        <div className='infomation__content'>
          <Input
            name='password'
            title={'Mật khẩu cũ'}
            value={password.password}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
          <Input
            name='newPassword'
            title={'Mật khẩu mới'}
            value={password.newPassword}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
          <Input
            name='retypePassword'
            title={'Nhập lại mật khẩu'}
            value={password.retypePassword}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
        </div>
        <div className='infomation__submit'>
          <button className='infomation__button'>Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
