import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../utils/const';
import { customStyles } from '../../utils/styleCustomTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetBooking } from '../../service/bookingService'
import { formatDate, formatDateApi } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatMoney';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [valueStatus, setValueStatus] = useState('');
  const [valueDate, setValueDate] = useState({ from_date: '', to_date: '' });
  const [dataService, setDataService] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const { isShowing, cpn, toggle } = useModal();
  const { dataBooking, isSuccessBooking, refetchBooking } = useGetBooking({ token: token, code: valueSearch, status: valueStatus, from_date: valueDate.from_date, to_date: valueDate.to_date })
  const columns = [
    {
      name: 'Mã booking',
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.status,
    },
    {
      name: 'Ngày đến cửa',
      selector: (row) => formatDate(row.arrival_date),
      grow: 0.6
    },
    {
      name: 'Dịch vụ',
      selector: (row) => <button className='customer__more' onClick={() => { setDataService(row.service); toggle('Modal') }} > Xem chi tiết</button >,
      grow: 0.6
    },
    {
      name: 'Tiền đã thu',
      selector: (row) => formatMoney(row.total_amount),
    },
    {
      name: 'Tiền chi phí',
      selector: (row) => formatMoney(row.total_expense),
    },
    {
      name: 'Tiền miễn giảm',
      selector: (row) => formatMoney(row.total_discount),
    },
  ];
  return (
    <>
      <div className='customer'>
        <div className='customer__box'>
          <div className='customer__header'>
            <div className='customer__title'>
              <span>Danh sách booking</span>
            </div>
          </div>
          <div className='customer__tools'>
            <div className='customer__left'>
              <div className='customer__search'>
                <input name='search' type='text' placeholder='Tìm kiếm ...' value={valueSearch} onChange={e => setValueSearch(e.target.value)} />
                <button onClick={refetchBooking}>
                  <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
                </button>
              </div>
              <div className='customer__filter'>
                <select name='filter' value={valueStatus} onChange={(e) => { setValueStatus(e.target.value); setTimeout(() => refetchBooking(), 0) }}>
                  <option value=''>Tất cả khách hàng</option>
                  <option value='0'>Chưa đến</option>
                  <option value='1'>Đã đến</option>
                  <option value='2'>Đã thực hiện dịch vụ</option>
                  <option value='3'>Đã ra viện</option>
                </select>
              </div>
            </div>
            <div className='customer__date'>
              <b>Chọn ngày</b>
              <input type='date' onChange={(e) => setValueDate({ ...valueDate, from_date: formatDateApi(e.target.value) })} />
              <input type='date' onChange={(e) => setValueDate({ ...valueDate, to_date: formatDateApi(e.target.value) })} />
              <button onClick={refetchBooking}>Áp dụng</button>
            </div>
          </div>
          <div className='customer__content'>
            {isSuccessBooking && <DataTable data={dataBooking.data.stage !== 1 ? dataBooking.data.result.data : []} columns={columns} customStyles={customStyles} highlightOnHover pagination noDataComponent={<div style={{ padding: '24px' }}>Dữ liệu trống</div>} />}
          </div>
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle} element={cpn} data={dataService} />
    </>
  );
};

export default Booking;
