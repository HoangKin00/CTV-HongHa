import React from 'react';
import DataTable from 'react-data-table-component';
import { PUBLIC_URL } from '../../../utils/const';
import { customStyles } from '../../../utils/styleCustomTable';

const data = [
    {
        code: 'BK001',
        name: 'Alex',
        status: 'Đến cửa',
        date: '10/02/2023',
        service: 'Danh sách',
        money: '10.000.000',
        money2: '100.000.000',
        money3: '50.000'
    }
]

const DetailBooking = () => {
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
            selector: (row) => row.date,
        },
        {
            name: 'Danh sách dịch vụ',
            selector: (row) => row.service,
        },
        {
            name: 'Tiền đã thu',
            selector: (row) => row.money,
        },
        {
            name: 'Tiền chi phí',
            selector: (row) => row.money2,
        },
        {
            name: 'Tiền miễn giảm',
            selector: (row) => row.money3,
        },
    ];
    return (
        <div className='customer'>
            <div className='customer__box'>
                <div className='customer__header'>
                    <div className='customer__title'>
                        <span>Chi tiết booking</span>
                    </div>
                </div>
                <div className='customer__tools'>
                    <div className='customer__left'>
                        <div className='customer__search'>
                            <input name='search' type='text' placeholder='Tìm kiếm ...' />
                            <button>
                                <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
                            </button>
                        </div>
                        <div className='customer__filter'>
                            <select name='filter'>
                                <option value='Tất cả khách hàng'>Tất cả khách hàng</option>
                                <option value='Đến cửa'>Đến cửa</option>
                                <option value='Thành công'>Thành công</option>
                                <option value='Không thành công'>Không thành công</option>
                            </select>
                        </div>
                    </div>
                    <div className='customer__date'>
                        <b>Chọn ngày</b>
                        <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
                        <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
                        <button>Áp dụng</button>
                    </div>
                </div>
                <div className='customer__content'>
                    <DataTable data={data} columns={columns} customStyles={customStyles} highlightOnHover pagination />
                </div>
            </div>
        </div>
    );
};

export default DetailBooking;
