import React, { useRef } from 'react';
import './noticeModal.scss';
import { useOutside } from '../../utils/help';
const NoticeModal = ({ message, closeModal, action }) => {
  const modalRef = useRef(null);
  useOutside(modalRef, closeModal);
  return (
    <div className='noticeModal'>
      <div className='noticeModal__box' ref={modalRef}>
        <div className='noticeModal__header'>Thông báo</div>
        <p>{message}</p>
        <div className='noticeModal__btn'>
          <button onClick={closeModal}>Hủy bỏ</button>
          <button onClick={action}>Đồng ý</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
