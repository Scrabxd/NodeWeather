import React, { useEffect } from 'react';
import axios from 'axios';

const TableUser = (props) => {

  useEffect(()=> {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllUsers = () => {
    axios.post('/users/all')
      .then( (data) => {
	props.setUser(data.data.users);
      }).catch( (error) => {
	console.log(error);
      })
  };

  return <table>
    {   props.data.map( user =>
    <tr>
      <td>{user.name}</td>
    </tr>
    )}
  </table>;
}

export default TableUser;
