import React from 'react'
import { Header } from '../Header/Header'
import { Post } from '../Post/Post'
import { ProfilePost } from '../ProfilePost/ProfilePost'

export const Home = () => {
    return (
        <div>
           <Header/> 
           <ProfilePost/>
           <Post/>
        </div>
    )
}
