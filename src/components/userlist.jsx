import { useEffect, useState } from 'react'
import '../css/userlist.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Userlist = ()=>{
    const [usersdata , getusersdata] = useState('')
    const navigate = useNavigate()
    const fetchuserlist = ()=>{
        axios.get('https://api.uncodecart.com/users/userlist').then((response)=>{
            getusersdata(response.data.message)
        })
    }
    const handleDelete = (id)=>{
        axios.delete('https://api.uncodecart.com/users/deleteuser/'+id).then((response)=>{
            fetchuserlist()
        })
    }
    const handleEdit = (id)=>{
        navigate('/edit/'+id)
    }
    useEffect(()=>{
        fetchuserlist()
    },[])
    //
    return(
        <>
        <table>
        <tr>
            <th>Users id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Mobile no</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        {usersdata && usersdata.map((users)=>(
            <tr>
                <td>{users.users_id}</td>
                <td>{users.firstname}</td>
                <td>{users.lastname}</td>
                <td>{users.mobileno}</td>
                <td>{users.email}</td>
                <td>
                    <input class="delete" type='button' value="Delete" onClick={()=>{handleDelete(users.users_id)}}/>
                    <input class="edit" type='button' value="Edit" onClick={()=>{handleEdit(users.users_id)}}/>
                </td>
            </tr>
        ))}
        
        </table>

        </>
    )
}
export default Userlist
