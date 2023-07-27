import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import Input from '../../components/Input';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetUser } from '../../service/collaboratorService';
import { useChangePassword } from '../../service/authService';
import './infomation.scss';

const Infomation = () => {
  const [password, setPassword] = useState({ newPassword: '', retypePassword: '' });
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const { dataUser, isSuccessUser } = useGetUser(token);
  const { mutateChangePassword } = useChangePassword();
  const handlePassword = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!password.newPassword || !password.retypePassword) {
      alert("Mật khẩu không được để trống");
    } else if (password.newPassword !== password.retypePassword) {
      alert("Mật khẩu không trùng khớp");
    } else {
      mutateChangePassword({ password: password.newPassword, token: token }, {
        onSuccess: (data) => {
          setPassword({ newPassword: '', retypePassword: '' });
          if (data.data.result.stage === false) {
            alert(data.data.result.message)
          } else if (data.data.result.status === 0) {
            alert(data.data.result.message.content)
          }
        }
      });
    }
  }
  return (
    <div className='infomation'>
      <Link to={`/customer-list`} className='infomation__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='infomation__box'>
        <div className='infomation__header'>
          <div className='infomation__title'>
            <span>Thông tin tài khoản</span>
            <p>Các thông tin cơ bản của tài khoản đang đăng nhập hệ thống</p>
          </div>
        </div>
        <div className='infomation__content'>
          {isSuccessUser && (
            <>
              <Input
                name='name'
                title={'Họ và tên'}
                value={dataUser.data.result.name}
                disable={true}
                require={false}
              />
              <Input
                name='phone'
                title={'Số điện thoại'}
                value={dataUser.data.result.phone}
                disable={true}
                require={false}
              />
              <Input
                name='email'
                type='email'
                title={'Email'}
                value={dataUser.data.result.email}
                disable={true}
                require={false}
              />
              <Input
                name='address'
                title={'Địa chỉ'}
                value={dataUser.data.result.address}
                disable={true}
                require={false}
              />
              <Input
                name='gender'
                title={'Giới tính'}
                value={dataUser.data.result.gender}
                disable={true}
                require={false}
              />
            </>
          )}
        </div>
      </div>
      <div className='infomation__box'>
        <div className='infomation__header'>
          <div className='infomation__title'>
            <span>Đặt lại mật khẩu</span>
          </div>
        </div>
        <div className='infomation__content'>
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
          <button className='infomation__button' onClick={handleSubmit}>Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
