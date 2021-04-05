import React from 'react'
import { LeftSide } from '../LeftSide/LeftSide'
import { PostView } from '../PostView/PostView'
import { RightSide } from '../RightSide/RightSide'

export const Post = () => {
    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                   <div className="col-md-3">
                   <LeftSide/>
                   </div>
                   <div className="col-md-7">
                       <PostView/>
                       <PostView/>
                   </div>
                   <div className="col-md-2">
                       <RightSide/>
                   </div>
                </div>
            </div>
        </section>
    )
}
