import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import summaryApi from '../common/summaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { HiOutlineExternalLink } from "react-icons/hi";
// import isAdmin from '../utils/isAdmin'


const UserMenu = ({close}) =>{
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout = async()=>{
    try {
      const response = await Axios({
         ...summaryApi.logout
      })

      if(response.data.success){
        if(close){
          close()
        }
        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      AxiosToastError(error)
    }
}

  const handleClose = ()=>{
    if(close){
      close()
    }
  }


  return (
    <>
      <div className="font-semibold"> My Account </div>
      <div className="text-sm mt-1">{user?.name || user?.email}</div>
      <Divider />
      <div className="grid grid-2 text-sm gap-2 ">
        <Link to={""} className="px-2 p-1 hover:bg-yellow-200">
          {" "}
          My Orders{" "}
        </Link>
        <Link to={""} className="px-2 p-1 hover:bg-yellow-200">
          {" "}
          Save Address{" "}
        </Link>
        <button onClick={handleLogout} className="text-center px-2 bg-red-500 rounded w-20 p-3 font-semibold text-white mt-2">
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;
