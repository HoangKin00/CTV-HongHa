import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../utils/const';
import { customStyles } from '../../utils/styleCustomTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetCustomer } from '../../service/customerService';
import { formatDate } from '../../utils/formatDate';
import './customer.scss';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
  const [valueSearch, setValueSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const { dataCustomer, isSuccessCustomer, refetchCustomer } = useGetCustomer({ token: token, name: valueSearch });
  const columns = [
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Số điện thoại 1',
      selector: (row) => row.phone1,
    },
    {
      name: 'Số điện thoại 2',
      selector: (row) => (row.phone2 ? row.phone2 : 'Trống'),
    },
    {
      name: 'Giới tính',
      selector: (row) => row.gender,
      grow: 0.6
    },
    {
      name: 'Ngày sinh',
      selector: (row) => formatDate(row.birthday),
    },
    {
      name: 'Địa chỉ',
      selector: (row) => row.address,
    },
  ];
  return (
    <div className='customer'>
      <div className='customer__box'>
        <div className='customer__header'>
          <div className='customer__title'>
            <span>Danh sách khách hàng</span>
          </div>
        </div>
        <div className='customer__tools'>
          <div className='customer__search customer__search--1'>
            <input name='search' type='text' placeholder='Tìm kiếm tên' value={valueSearch} onChange={e => setValueSearch(e.target.value)} />
            <button class="customer__searchSubmit" onClick={refetchCustomer}>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
        </div>
        <div className='customer__content'>
          {isSuccessCustomer && <DataTable data={dataCustomer.data.stage === 1 ? [] : dataCustomer.data.stage === 2 ? [] : dataCustomer.data.result.data} columns={columns} customStyles={customStyles} highlightOnHover pagination noDataComponent={<div style={{ padding: '24px' }}>Dữ liệu trống</div>} />}
        </div>
      </div>
    </div>
  );
};

export default Customer;
