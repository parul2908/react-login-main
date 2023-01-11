import React, { useState }from 'react';
import '../../App.css';
import './Profile.css'
import { Button } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"


export default function Profile() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')

        }catch{
            setError('Failed to Log Out')
        }
    }


    return (
        <>
        <div className="whole-container">
            <div className="card1">
                  <div className="imgBx">
                      <img src="../images/bot.jpg" />
                  </div>
                  <div className="content">
                      <div className="details">
                          <h2>Ritiki Pandey</h2>
                          <ul className="social_icon">
                              <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                  </div>
            </div>
            <Button variant = "link" onClick = {handleLogout}>Log Out</Button>
        </div>
        </>
    )
}