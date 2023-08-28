import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../Redux-saga/action';

function UserList() {


    const dispatch = useDispatch();
    const data = useSelector(state=>console.log(state.users))

    useEffect(() => {

        dispatch(getUserData())

     
    }, [dispatch])
    
  return (
    <div>UserList</div>
  )
}

export default UserList