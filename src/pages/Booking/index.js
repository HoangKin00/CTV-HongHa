import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../utils/const';
import { customStyles } from '../../utils/styleCustomTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetBooking } from '../../service/bookingService'
import { formatDate, formatDateApi } from '../../utils/formatDate';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

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
  const { dataBooking, isSuccessBooking, refetchBooking } = useGetBooking({ token: token, code: valueSearch, status: valueStatus, from_date: formatDateApi(valueDate.from_date), to_date: formatDateApi(valueDate.to_date) })
  const columns = [
    {
      name: 'Mã booking',
      selector: (row) => row.code,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
      wrap: true,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.status,
      wrap: true,
    },
    {
      name: 'Ngày đến cửa',
      selector: (row) => formatDate(row.arrival_date),
    },
    {
      name: 'Dịch vụ',
      selector: (row) => <button className='customer__more' onClick={() => { setDataService(row.service); toggle('Modal') }} > Xem chi tiết</button >,
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
                <button className='customer__searchSubmit' onClick={refetchBooking}>
                  <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
                </button>
              </div>
              <div className='customer__filter'>
                <select name='filter' value={valueStatus} onChange={(e) => { setValueStatus(e.target.value); setTimeout(() => refetchBooking(), 0) }}>
                  <option value='' disabled>Chọn trạng thái</option>
                  <option value=''>Tất cả trạng thái</option>
                  <option value='1'>Đã đến</option>
                  <option value='3'>Đã hoàn thành dịch vụ</option>
                </select>
              </div>
            </div>
            <div className='customer__date'>
              <div><b>Chọn ngày đến cửa</b></div>
              <div className='customer__dateInput'>
                <DatePicker
                  className="date__picker"
                  calendarIcon={<i className="icon-calendar"></i>}
                  clearIcon={null}
                  dayPlaceholder="dd"
                  monthPlaceholder="mm"
                  yearPlaceholder="yyyy"
                  format="dd/MM/yyyy"
                  onChange={(value) => setValueDate({ ...valueDate, from_date: value })}
                  value={valueDate.from_date}
                />
                <DatePicker
                  className="date__picker"
                  calendarIcon={<i className="icon-calendar"></i>}
                  clearIcon={null}
                  dayPlaceholder="dd"
                  monthPlaceholder="mm"
                  yearPlaceholder="yyyy"
                  format="dd/MM/yyyy"
                  onChange={(value) => setValueDate({ ...valueDate, to_date: value })}
                  value={valueDate.to_date}
                />
                <button className='customer__dateSubmit' onClick={refetchBooking}>Áp dụng</button>
                {(valueDate.from_date || valueDate.to_date) && <button className='customer__dateSubmit' style={{ backgroundColor: '#df0000' }} onClick={() => { setValueDate({ from_date: '', to_date: '' }); setTimeout(() => { refetchBooking() }, 0) }}>Reset</button>}
              </div>
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
