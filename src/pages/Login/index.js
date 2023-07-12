import React from 'react';
import { PUBLIC_URL } from '../../utils/const';
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='login__box'>
          <div className='login__pic'>
            <img src={`${PUBLIC_URL}/images/login.jpg`} alt='' />
          </div>
          <div className='login__detail'>
            <div className='login__form'>
              <div className='login__title'>
                <span>ĐĂNG NHẬP</span>
              </div>
              <div className='login__input'>
                <label>Email người dùng </label>
                <input type='email' name='email' required />
              </div>
              <div className='login__input'>
                <label>Mật khẩu </label>
                <input type='password' name='password' required />
              </div>
              <div class='login__checkbox'>
                <label>
                  <input type='checkbox' name='' /> Nhớ Đăng Nhập
                </label>
              </div>
              <div className='login__button'>
                <button>Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
