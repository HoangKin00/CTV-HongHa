import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../utils/const';
import { customStyles } from '../../utils/styleCustomTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetPayment } from '../../service/paymentService'
import { formatDate, formatDateApi } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatMoney';
import './Payment.scss';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [valueDate, setValueDate] = useState({ from_date: '', to_date: '' });
  const [valueSelect, setValueSelect] = useState('name');
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const { dataPayment, isSuccessPayment, refetchPayment } = useGetPayment({ token: token, [valueSelect]: valueSearch, from_date: valueDate.from_date, to_date: valueDate.to_date });
  const columns = [
    {
      name: 'Mã booking',
      selector: (row) => row.booking_code,
      sortable: true,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
    },
    {
      name: 'Tiền thanh toán',
      selector: (row) => formatMoney(row.amount),
    },
    {
      name: 'Đơn vị',
      selector: (row) => row.currency_unit,
      grow: 0.5,
    },
    {
      name: 'Trạng thái phiếu',
      selector: (row) => row.stage,
    },
    {
      name: 'Hình thức thanh toán',
      selector: (row) => row.method,
      grow: 0.8,
    },
    {
      name: 'Loại thanh toán',
      selector: (row) => row.type,
      grow: 0.8,
    },
    {
      name: 'Ngày thanh toán',
      selector: (row) => formatDate(row.date),
      grow: 0.8,
    },
  ];
  return (
    <div className='customer'>
      <div className='customer__box'>
        <div className='customer__header'>
          <div className='customer__title'>
            <span>Danh sách payment</span>
          </div>
        </div>
        <div className='customer__tools'>
          <div className='customer__left'>
            <div className='customer__group'>
              <input type="text" className='customer__control' placeholder='Tìm kiếm theo...' value={valueSearch} onChange={e => setValueSearch(e.target.value)} />
              <select className='customer__toggle' value={valueSelect} onChange={(e) => setValueSelect(e.target.value)}>
                <option value="name">Tên</option>
                <option value="booking_id">Mã booking</option>
              </select>
              <button onClick={refetchPayment}>
                <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
              </button>
            </div>
          </div>
          <div className='customer__date'>
            <b>Chọn ngày</b>
            <input type='date' onChange={(e) => setValueDate({ ...valueDate, from_date: formatDateApi(e.target.value) })} />
            <input type='date' onChange={(e) => setValueDate({ ...valueDate, to_date: formatDateApi(e.target.value) })} />
            <button onClick={refetchPayment}>Áp dụng</button>
          </div>
        </div>
        <div className='customer__content'>
          {isSuccessPayment && <DataTable data={dataPayment.data.stage !== 1 ? dataPayment.data.result.data : []} columns={columns} customStyles={customStyles} highlightOnHover pagination responsive noDataComponent={<div style={{ padding: '24px' }}>Dữ liệu trống</div>} />}
        </div>
      </div>
    </div>
  );
};

export default Payment;
