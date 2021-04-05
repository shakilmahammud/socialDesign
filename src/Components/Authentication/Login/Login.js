import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <section>
            <div className="container m-auto">
                <div className="row">
                <div className="col-md-12">
                <div style={{maxWidth:"450px",margin:"0 auto",marginTop:"100px"}}>
                    <form style={{background:"#fff",padding:"40px 10px",height:"300px"}}>
                    <h2>Logo</h2>
                    <div>
                       
                        <input type="text" placeholder="Enter Your Email" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}}/>
                    </div>
                    <div>
                    
                        <input type="password" placeholder="Password" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}}/>
                    </div>
                    <div>
                        <input type="submit" value="Login" style={{padding:"10px 24px",background:"#3AB4FB",color:"#fff",border:"none",borderRadius:"10px",outline:"none"}}/>
                    </div>
                    <div >
                        <Link to="/signup"><h6 style={{marginTop:"20px"}}>Don't have an account?</h6></Link>
                    </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
