import ReactDOM from 'react-dom';
import { formatMoney } from '../../utils/formatMoney'
import './Modal.scss'

export default function Modal({ isShowing, hide, element, data }) {
    return isShowing && element === 'Modal' ? ReactDOM.createPortal(
        <>
            <div className="modal" id="modal-pop" style={{ display: 'flex' }}>
                <div className="modal-bg" onClick={hide}></div>
                <div className="modal-box animate-pop">
                    <div className="modal-header">
                        <div className="modal-close" onClick={hide}>&times;</div>
                        <div className="modal-title">Dịch vụ</div>
                    </div>
                    <div className="modal-body">
                        <div className='modal__head'>
                            <div className='modal__headItem'>Mã dịch vụ</div>
                            <div className='modal__headItem'>Tên dịch vụ</div>
                            <div className='modal__headItem'>Trạng thái</div>
                            <div className='modal__headItem'>Giá</div>
                        </div>
                        {data.map((item, index) => (
                            <div key={index} className='modal__col'>
                                <div className='modal__colItem'>{item.code}</div>
                                <div className='modal__colItem'>{item.name}</div>
                                <div className='modal__colItem'>{item.status}</div>
                                <div className='modal__colItem'>{formatMoney(item.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>,
        document.body) : null;
}