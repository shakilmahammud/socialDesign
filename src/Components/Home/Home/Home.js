import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../Header/Header'
import { Post } from '../Post/Post'
import { ProfilePost } from '../ProfilePost/ProfilePost'
import proxy from '../../../proxy.json'

export const Home = () => {
    const history=useHistory()
    const [value,setvalue]=useState({})
    const [success,setSuccess]=useState()
   const [fileVideo,setFileVideo]=useState({})
   console.log(fileVideo.pic)
const getUser=async e=>{
    const accessToken=localStorage.getItem('accessToken')
        const formData=new FormData()
        formData.append('accessToken',accessToken)
        try{
            const response=await axios.post(proxy.endpoint+'getUser',formData)
            if(response){
                if(response?.data.status==="success"){
                    setSuccess(response?.data)
                }
            }
           }catch (e) {
               console.log(e)
           }
          
}

    useEffect(()=>{
        getUser()
    },[])

    const handleValue=(e)=>{
        const newValue={...value}
        newValue[e.target.name]=e.target.value
        setvalue(newValue)
    }
    const handleaddpost=async e=>{
        e.preventDefault();
        const accessToken=localStorage.getItem('accessToken')
            const formData=new FormData()
            formData.append('accessToken',accessToken)
            formData.append('caption',value.message)
            // formData.append('image',fileVideo?.pic)
            // formData.append('video',fileVideo.video)
            formData.append('_id',success?.data._id)
            try{
                const response=await axios.post(proxy.endpoint+'addPost',formData)
                if(response){
                    if(response?.data.status==="success"){
                        console.log(response)
                    }
                }
               }catch (e) {
                   console.log(e)
               }
              
    }
    return (
        <div>
           <Header/> 
           <ProfilePost success={success} handleValue={handleValue} setFileVideo={setFileVideo} fileVideo={fileVideo} handleaddpost={handleaddpost}/>
           <Post/>
        </div>
    )
}
