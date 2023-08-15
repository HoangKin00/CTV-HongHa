import ReactDOM from 'react-dom';
import DataTable from 'react-data-table-component';
import { formatMoney } from '../../utils/formatMoney'
import { customStyles } from '../../utils/styleCustomTable';
import './Modal.scss'

export default function Modal({ isShowing, hide, element, data }) {
    const columns = [
        {
            name: 'Mã dịch vụ',
            selector: (row) => row.code,
            grow: 0.5,
            allowOverflow: false,
            wrap: true,
        },
        {
            name: 'Tên dịch vụ',
            selector: (row) => row.name,
            allowOverflow: false,
            wrap: true,
        },
        {
            name: 'Trạng thái',
            selector: (row) => row.status,
            grow: 0.5,
            allowOverflow: false,
            wrap: true,
        },
        {
            name: 'Giá',
            selector: (row) => formatMoney(row.price),
            grow: 0.5,
            allowOverflow: false,
            wrap: true,
        },
    ];
    return isShowing && element === 'Modal' ? ReactDOM.createPortal(
        <>
            <div className="modal" id="modal-pop" style={{ display: 'flex' }}>
                <div className="modal-bg" onClick={hide}></div>
                <div className="modal-box animate-pop">
                    <div className="modal-header">
                        <div className="modal-close" onClick={hide}>Quay lại</div>
                        <div className="modal-title">Dịch vụ</div>
                    </div>
                    <div className="modal-body">
                        {data && <DataTable data={data} columns={columns} customStyles={customStyles} highlightOnHover pagination noDataComponent={<div style={{ padding: '24px' }}>Dữ liệu trống</div>} />}
                    </div>
                </div>
            </div>
        </>,
        document.body) : null;
}