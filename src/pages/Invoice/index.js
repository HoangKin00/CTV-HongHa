import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../utils/const';
import { customStyles } from '../../utils/styleCustomTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetInvoice } from '../../service/invoiceService'
import { formatDate, formatDateApi } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatMoney';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [valueStatus, setValueStatus] = useState('');
  const [valueDate, setValueDate] = useState({ from_date: '', to_date: '' });
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);
  const { dataInvoice, isSuccessInvoice, refetchInvoice } = useGetInvoice({ token: token, name: valueSearch, status: valueStatus, from_date: valueDate.from_date, to_date: valueDate.to_date })
  const columns = [
    {
      name: 'Tên khách hàng',
      selector: (row) => row.partner_name,
      sortable: true,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.stage,
    },
    {
      name: 'Ghi chú',
      selector: (row) => row.note,
    },
    {
      name: 'Số tiền chi',
      selector: (row) => formatMoney(row.amount),
    },
    {
      name: 'Ngày tạo phiếu',
      selector: (row) => formatDate(row.create_date),
    },
  ];
  return (
    <>
      <div className='customer'>
        <div className='customer__box'>
          <div className='customer__header'>
            <div className='customer__title'>
              <span>Danh sách phiếu chi hoa hồng</span>
            </div>
          </div>
          <div className='customer__tools'>
            <div className='customer__left'>
              <div className='customer__search'>
                <input name='search' type='text' placeholder='Tìm kiếm ...' value={valueSearch} onChange={e => setValueSearch(e.target.value)} />
                <button onClick={refetchInvoice}>
                  <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
                </button>
              </div>
              <div className='customer__filter'>
                <select name='filter' value={valueStatus} onChange={(e) => { setValueStatus(e.target.value); setTimeout(() => refetchInvoice(), 0) }}>
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
              <button onClick={refetchInvoice}>Áp dụng</button>
            </div>
          </div>
          <div className='customer__content'>
            {isSuccessInvoice && <DataTable data={dataInvoice.data.stage !== 1 ? dataInvoice.data.result : []} columns={columns} customStyles={customStyles} highlightOnHover pagination noDataComponent={<div style={{ padding: '24px' }}>Dữ liệu trống</div>} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
