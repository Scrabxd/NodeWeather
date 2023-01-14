import React from 'react';
import axios from 'axios';


class UserList extends React.Component {

    state = {
        users: [],
    }

    componentDidMount (){
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios.post('/users/all')
            .then( (data) => {
                this.setState({users: data.data.users});
            }).catch( (error) =>{
            console.log(error);
            })
    }

    render() {
        const {
            users
        } = this.state;
        
        return (
            <section id="allUsers">
                 <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                    <tr>
                        <td>{users.map( user => <h5> {user.id}</h5>)}</td>
                        <td>{users.map( user => <h5> {user.name}</h5>)}</td>
                    </tr>
                 </table>
            </section>
        );
    }
}

export default UserList;
