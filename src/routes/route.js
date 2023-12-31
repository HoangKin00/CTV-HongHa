import { PUBLIC_URL } from '../utils/const';
export const menu = [
  {
    name: 'Khách hàng',
    icon: `${PUBLIC_URL}/icons/customer.svg`,
    link: '/customer-list',
    dropdown: [],
  },
  {
    name: 'Dịch vụ',
    icon: `${PUBLIC_URL}/icons/service.svg`,
    link: '/service-list',
    dropdown: [],
  },
  {
    name: 'Báo cáo',
    icon: `${PUBLIC_URL}/icons/report.svg`,
    link: '#',
    dropdown: [
      { name: 'Báo cáo Dịch vụ', link: '/report-service' },
      { name: 'Báo cáo Tài chính', link: '/report-finance' },
    ],
  },
];
export const dropdownheader = [
  {
    name: 'Thông tin cá nhân',
    link: `/infomation`,
  },
  {
    name: 'Đăng xuất',
    link: `/login`,
  },
];

export const customerList = [
  {
    id: 'Nguyễn Hạ Vy',
    name: '0987654321',
    phone: '0987654321',
    address: 'Nữ',
    gender: '02/03/2023',
    group: 'Hà Nội',
  },
  {
    id: 'Nguyễn Văn B',
    name: '0987654321',
    phone: '0987654321',
    address: 'Nam',
    gender: '02/03/2023',
    group: 'Hà Nội',
  },
  {
    id: 'Mai Thị Hiền',
    name: '0987654321',
    phone: '0987654321',
    address: 'Nữ',
    gender: '02/03/2023',
    group: 'Hà Nội',
  },
];

export const customerListBooking = [
  {
    max: "BK01",
    id: 'Nguyễn Hạ Vy',
    name: 'Đến cửa',
    phone: '02/03/2023',
    address: 'Chi tiết',
    gender: '100.000 VND',
    group: '200.000 VND',
    created_at: '50.000 VND',
  },
  {
    max: "BK02",
    id: 'Nguyễn Hạ Vy 1',
    name: 'Đến cửa',
    phone: '02/03/2023',
    address: 'Chi tiết',
    gender: '100.000 VND',
    group: '200.000 VND',
    created_at: '50.000 VND',
  },
  {
    max: "BK03",
    id: 'Nguyễn Hạ Vy 2',
    name: 'Đến cửa',
    phone: '02/03/2023',
    address: 'Chi tiết',
    gender: '100.000 VND',
    group: '200.000 VND',
    created_at: '50.000 VND',
  },
];

export const collaboratosList = [
  {
    id: 'kn123',
    name: 'Nguyễn Hạ Vy',
    phone: '0987654321',
    address: 'Hà Nội',
    group: 'Kí hợp đồng',
    ratings: 'Hạng A',
    link: '/detail-collaborators',
  },
  {
    id: 'kn456',
    name: 'Nguyễn Văn B',
    phone: '0987654321',
    address: 'Hà Nam',
    group: 'Không kí hợp đồng',
    ratings: 'Hạng B',
    link: '/detail-collaborators',
  },
  {
    id: 'kn545',
    name: 'Mai Thị Hiền',
    phone: '0987654321',
    address: 'Nam Định',
    group: 'Không kí hợp đồng',
    ratings: 'Hạng C',
    link: '/detail-collaborators',
  },
];
