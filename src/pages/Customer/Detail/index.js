import React, { useEffect, useState } from 'react';
import { Link, useMatch, useParams } from 'react-router-dom';

import './detailCustomer.scss';
// import NoticeModal from '../../../components/NoticeModal';
import { PUBLIC_URL } from '../../../utils/const';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useGetBooking } from '../../../services/bookingService';
import { useGetInvoice } from '../../../services/invoiceService';
import { formatMoney } from '../../../utils/formatMoney';

const DetailCustomer = () => {
  // const [deleteModal, isDeleteModal] = useState(false);
  // const handleIsDelete = () => {
  //   isDeleteModal(!deleteModal);
  // };

  const [data, setData] = useState([])
  console.log("data: ", data);
  const matchCustomer = useMatch('/detail-customer/:id');
  const matchCustomerSuccess = useMatch('/detail-customer-success/:id');
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const { dataBooking, isSuccessBooking } = useGetBooking(token);
  const { dataInvoice, isSuccessInvoice } = useGetInvoice(token);
  useEffect(() => {
    if (matchCustomer && isSuccessBooking) {
      const dataFilter = dataBooking.data.result.data.filter(item => {
        return item.code === id
      })
      setData(dataFilter)
    } else if (matchCustomerSuccess && isSuccessInvoice) {
      const dataFilter = dataInvoice.data.result.filter(item => {
        return item.revenue_book === id
      })
      setData(dataFilter)
    }
  }, [matchCustomer, matchCustomerSuccess, isSuccessBooking, isSuccessInvoice, dataBooking, dataInvoice, id])
  return (
    <>
      <div className='detailCustomer'>
        <div className='detailCustomer__delete'>
          {matchCustomer &&
            <Link to={`/customer-list`} className='detailCustomer__arrow'>
              <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
              Quay lại
            </Link>
          }
          {/* <button className='detailCustomer__button' onClick={handleIsDelete}>
            Xóa khách hàng
          </button> */}
        </div>
        {matchCustomer && data.length !== 0 && (
          <div className='detailCustomer__box'>
            <div className='detailCustomer__title'>
              <span>Thông tin cá nhân</span>
              {/* <div className='detailCustomer__edit'>Cập nhật</div> */}
            </div>
            <div className='detailCustomer__content'>
              <div className='detailCustomer__info'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <th>arrival_date:</th>
                      <td>{data[0].arrival_date}</td>
                    </tr>
                    <tr>
                      <th>code:</th>
                      <td>{data[0].code}</td>
                    </tr>
                    <tr>
                      <th>in_date:</th>
                      <td>{data[0].in_date}</td>
                    </tr>
                    <tr>
                      <th>name:</th>
                      <td>{data[0].name}</td>
                    </tr>
                    <tr>
                      <th>out_date:</th>
                      <td>{data[0].out_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='detailCustomer__info'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <th>patient_code:</th>
                      <td>{data[0].patient_code}</td>
                    </tr>
                    <tr>
                      <th>phone:</th>
                      <td>{data[0].phone}</td>
                    </tr>
                    <tr>
                      <th>reception_date:</th>
                      <td>{data[0].reception_date}</td>
                    </tr>
                    <tr>
                      <th>status:</th>
                      <td>{data[0].status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {matchCustomerSuccess && data.length !== 0 && (
          <>
            <div className='detailCustomer__box'>
              <div className='detailCustomer__title'>
                <span>Thông tin cá nhân</span>
                {/* <div className='detailCustomer__edit'>Cập nhật</div> */}
              </div>
              <div className='detailCustomer__content'>
                <div className='detailCustomer__info'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>Họ tên:</th>
                        <td>{data[0].name}</td>
                      </tr>
                      <tr>
                        <th>Sổ thu:</th>
                        <td>{data[0].revenue_book}</td>
                      </tr>
                      <tr>
                        <th>Ghi chú:</th>
                        <td>{data[0].note}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='detailCustomer__info'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>Trạng thái:</th>
                        <td>{data[0].stage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='detailCustomer__box'>
              <div className='detailCustomer__title'>
                <span>Thông tin dịch vụ</span>
              </div>
              <div className='detailCustomer__service'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <th>Dịch vụ</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Miễn giảm</th>
                      <th>Thành tiền</th>
                      <th>Tỷ lệ hoa hồng</th>
                      <th>Thành tiền hoa hồng</th>
                    </tr>
                    {data[0].service.map((item, index) => (
                      <tr key={index}>
                        <td>{item.service_name}</td>
                        <td>{formatMoney(item.unit_price)}</td>
                        <td>{item.quantity}</td>
                        <td>{item.discount}</td>
                        <td>{formatMoney(item.amount)}</td>
                        <td>{item.commission_rate}%</td>
                        <td>{formatMoney(item.commission_amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='detailCustomer__group'>
                <button>
                  Tổng doanh thu : <b>{formatMoney(data[0].amount)}</b>
                </button>
              </div>
            </div>
          </>
        )}
        {/* <div className='detailCustomer__box'>
          <div className='detailCustomer__title'>
            <span>Thông tin cá nhân</span>
            <div className='detailCustomer__edit'>Cập nhật</div>
          </div>
          <div className='detailCustomer__content'>
            <div className='detailCustomer__info'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>Họ tên:</th>
                    <td>Nguyễn Hạ Vy</td>
                  </tr>
                  <tr>
                    <th>Ngày sinh:</th>
                    <td>07/07/2000</td>
                  </tr>
                  <tr>
                    <th>Giới tính:</th>
                    <td>Nữ</td>
                  </tr>
                  <tr>
                    <th>Số điện thoại:</th>
                    <td>0987654321</td>
                  </tr>
                  <tr>
                    <th>Địa chỉ:</th>
                    <td>Hà Nội</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='detailCustomer__info'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>Nhóm khách hàng:</th>
                    <td>Đến cửa</td>
                  </tr>
                  <tr>
                    <th>Mã khách hàng:</th>
                    <td>kn123</td>
                  </tr>
                  <tr>
                    <th>Ngày làm dịch vụ:</th>
                    <td>07/07/2021</td>
                  </tr>
                  <tr>
                    <th>Mô tả:</th>
                    <td>.......</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='detailCustomer__box'>
          <div className='detailCustomer__header'>
            <div className='detailCustomer__title'>
              <span>Thông tin dịch vụ</span>
            </div>
          </div>
          <div className='detailCustomer__service'>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Dịch vụ</th>
                  <th>Số tiền</th>
                  <th>Đã cọc</th>
                  <th>Số nợ</th>
                  <th>Ngày làm</th>
                  <th>Bác sĩ thực hiện</th>
                </tr>
                <tr>
                  <td>Cắt mí plasma</td>
                  <td>10.000.000</td>
                  <td>2.000.000</td>
                  <td>8.000.000</td>
                  <td>01/01/2022</td>
                  <td>Nguyễn Văn A</td>
                </tr>
                <tr>
                  <td>Nâng mũi</td>
                  <td>40.000.000</td>
                  <td>2.000.000</td>
                  <td>8.000.000</td>
                  <td>01/01/2022</td>
                  <td>Nguyễn Văn A</td>
                </tr>
                <tr>
                  <td>Nâng ngực</td>
                  <td>70.000.000</td>
                  <td>2.000.000</td>
                  <td>8.000.000</td>
                  <td>01/01/2022</td>
                  <td>Nguyễn Văn A</td>
                </tr>
                <tr>
                  <td>Hút mỡ bụng</td>
                  <td>30.000.000</td>
                  <td>2.000.000</td>
                  <td>8.000.000</td>
                  <td>01/01/2022</td>
                  <td>Nguyễn Văn A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='detailCustomer__group'>
            <button>
              Tổng doanh thu : <b>135 triệu</b>
            </button>
          </div>
        </div> */}
      </div>
      {/* {deleteModal && <NoticeModal message={'Bạn có chắc muốn xóa ?'} closeModal={handleIsDelete} />} */}
    </>
  );
};

export default DetailCustomer;
