import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import '../../App.css';
import { Button2 } from '../Button';
import './SignUp.css'


function SignUp() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const twitterRef = useRef()
    const githubRef = useRef()
    const linkedinRef = useRef()
    const { Signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const db = firebase.firestore().collection('user-details')

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try {
            setError("")
            setLoading(true)
            await Signup(emailRef.current.value, passwordRef.current.value)

            db.add({
                Name: nameRef.current.value,
                Email: emailRef.current.value,
                Twitter: twitterRef.current.value,
                Github: githubRef.current.value,
                Linkedin: linkedinRef.current.value,
            })
            history.push("/profile")
        } catch {
            setError('Failed to create an account')
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
                    <h1>Sign Up</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <div className="box">
                            <i className="fa fa-user yes"></i>
                            <input type="text" name="name" id="name" placeholder="Enter your name" ref={nameRef} />
                        </div>
                        <div className="box">
                            <i className="fa fa-envelope yes"></i>
                            <input type="email" name="email" id="email" placeholder="Enter your Email" ref={emailRef} required/>
                        </div>
                        <div className="box">
                            <i className="fa fa-key yes"></i>
                            <input type="password" name="name" id="password" placeholder="Enter your password" ref={passwordRef} required/>
                        </div>
                        <div className="box">
                            <i className="fa fa-key yes"></i>
                            <input type="password" name="name" id="confirm" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                        </div>
                        <div className="box">
                            <i className="fa fa-twitter yes"></i>
                            <input type="text" name="name" id="Instagram" placeholder="Enter your Twitter Handle" ref={twitterRef} />
                        </div>
                        <div className="box">
                            <i className="fa fa-github yes"></i>
                            <input type="text" name="name" id="Github" placeholder="Enter your Github Profile" ref={githubRef} />
                        </div>
                        <div className="box">
                            <i className="fa fa-linkedin-square yes"></i>
                            <input type="text" name="name" id="linkedin" placeholder="Enter your Linkedin Account" ref={linkedinRef} />
                        </div>
                        <div>
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                        </div>
                        <Button disabled={loading} className = "w-100" type="submit">Sign Up</Button>
                    </Form>
                </div>
            </div>
        </>

    )
}

export default SignUp
