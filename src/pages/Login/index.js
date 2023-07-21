import React, { useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
import { useLogin } from '../../service/authService';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './login.scss';

const Login = () => {
  const initialUser = {
    login: '',
    password: ''
  }
  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState({ message: '', status: false });
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  const { mutateLogin } = useLogin();
  const handleChange = (name) => (event) => {
    setUser((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmit = () => {
    if (!user.login || !user.password) {
      setIsError({ message: 'Số điện thoại và mật khẩu không được để trống', status: true })
    } else {
      mutateLogin(user, {
        onSuccess: (data) => {
          if (!data.data.result.data || data.data.result.message === 'Login, password or db invalid') {
            setIsError({ message: 'Số điện thoại hoặc mật khẩu sai', status: true })
          } else {
            setToken(data.data.result.data.access_token)
            setIsError({ message: '', status: false })
            navigate('/customer-list');
          }
        }
      });
    }
  }
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
              {isError.status === true && <div className='login__message'>{isError.message}</div>}
              <div className='login__input'>
                <label>Số điện thoại</label>
                <input type='text' name='phone' className={isError.status === true ? 'error' : ''} required  onChange={handleChange('login')} onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')} />
              </div>
              <div className='login__input'>
                <label>Mật khẩu</label>
                <input type='password' name='password' className={isError.status === true ? 'error' : ''} required onChange={handleChange('password')} onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}  />
              </div>
              <div onClick={() => handleSubmit()} className='login__button'>
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
