import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import '../../App.css';
import { Button2 } from '../Button';
import './SignUp.css'


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/profile")
        } catch {
            setError('Failed to Log In')
        }
        setLoading(false)


    }

    return (
        <>
            <div className="whole-container">
                <div className="first-Container">
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                            <i className="fa fa-address-book-o yes" aria-hidden="true"></i>
                            <i className="fa fa-gift no" aria-hidden="true"></i>
                            <i className="fa fa-github yes" aria-hidden="true"></i>
                            <i className="fa fa-battery-three-quarters no" aria-hidden="true"></i>
                            <i className="fa fa-facebook yes" aria-hidden="true"></i>
                            <i className="fa fa-star no" aria-hidden="true"></i>
                            <i className="fa fa-instagram yes" aria-hidden="true"></i>
                            <i className="fa fa-graduation-cap no" aria-hidden="true"></i>
                            <i className="fa fa-comments yes" aria-hidden="true"></i>
                            <i className="fa fa-envelope-o no" aria-hidden="true"></i>
                            <i className="fa fa-globe yes" aria-hidden="true"></i>
                            <i className="fa fa-signal no" aria-hidden="true"></i>
                            <i className="fa fa-twitter yes" aria-hidden="true"></i>
                            <i className="fa fa-hourglass-end no" aria-hidden="true"></i>
                            <i className="fa fa-search yes" aria-hidden="true"></i>
                            <i className="fa fa-bookmark no" aria-hidden="true"></i>
                            <i className="fa fa-user yes" aria-hidden="true"></i>
                            <i className="fa fa-map-marker no" aria-hidden="true"></i>
                            <i className="fa fa-plane yes" aria-hidden="true"></i>
                            <i className="fa fa-calendar no" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="second-container">
                    <h1>Log In</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <div className="box">
                            <i className="fa fa-envelope yes"></i>
                            <input type="email" name="email" id="email" placeholder="Enter your Email" ref={emailRef} required />
                        </div>
                        <div className="box">
                            <i className="fa fa-key yes"></i>
                            <input type="password" name="name" id="password" placeholder="Enter your password" ref={passwordRef} required />
                        </div>
                        <div>
                            <p>Need an Account? <Link to="/login">Sign Up</Link></p>
                        </div>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </div>
            </div>
        </>
            )
}

export default Login