import React from 'react';
import { useNavigate } from 'react-router-dom';
import './collaboratorList.scss';
const CollaboratorList = (props) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail-collaborators/${props.id}`);
  };
  return (
    <tr className='collaboratorList' onClick={handleDetail}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.address}</td>
      <td>{props.group}</td>
      <td>{props.ratings}</td>
    </tr>
  );
};

export default CollaboratorList;
