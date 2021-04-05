import React from 'react'

export const PostView = () => {
    return (
        <div className="row" style={{background:"#fff",padding:"10px",marginLeft:"10px",borderRadius:"10px",marginRight:"10px",marginBottom:"30px"}}>
            <div className="col-md-1">
             <div >  
              <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px"}}/>
             </div>
            </div>
            <div className="col-md-11">
                <div>
                <h6 style={{marginLeft:"20px"}}>name</h6>
                <span  style={{marginLeft:"20px"}}>Publisher</span>
                </div>
            </div>
            <div className="col-md-12">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores laboriosam explicabo? Fugit, laboriosam ipsum. Ullam id ab, et vel voluptates deleniti ut, ea libero sapiente praesentium eligendi? Esse, dolore.</div>
            </div>
            <div className="col-md-12">
                <div>
                    <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    )
}
