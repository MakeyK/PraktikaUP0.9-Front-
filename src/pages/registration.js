import React, { useContext, useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap'
import { LOGIN_ROUTE, HISTORYREQUEST } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NavBar from "../components/NavBar";
import FonMetla from "../components/Files/fonmetla.png"
import { registration } from "../http/userApi";


const Registration = observer(() => {
    document.body.style.backgroundColor = "#313131";
    document.body.style.backgroundRepeat = "no-repeat";
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [FIO, setFIO] = useState('')
    const [phone, setPhone] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            const response = await registration(FIO, phone, email, login, password)
            user.setIsAuth(true)
            user.setUser()
            navigate(HISTORYREQUEST)
        } catch (error) {
            console.log(error)
            alert(error)}}

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 74 }}>
            <img src={FonMetla} style={{ height: '660px', opacity: '50%' }} />
            <Card style={{ position: 'fixed', borderRadius: '36px', borderColor: 'white', width: 332, height: 475, fontFamily: "Play", backgroundColor: '#9CB544' }} className="p-3 #FFFAF4">
                <p style={{ fontSize: '32px', display: 'flex', width: '216px', marginLeft: '38px', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', textShadow: '-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black' }}>
                    Регистрация</p>

                <Form className="d-flex flex-column" style={{}}>
                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width: '303px', backgroundColor: 'white' }}
                        className="mt-3"
                        size="lg"
                        value={FIO}
                        placeholder="Введите ваше имя..."
                        onChange={e => setFIO(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width: '303px', backgroundColor: 'white' }}
                        className="mt-3"
                        size="lg"
                        value={phone}
                        placeholder="Введите ваш номер..."
                        onChange={e => setPhone(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width: '303px', backgroundColor: 'white' }}
                        className="mt-3"
                        size="lg"
                        type="email"
                        value={email}
                        placeholder="Введите вашу почту..."
                        onChange={e => setEmail(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width: '303px', backgroundColor: 'white' }}
                        className="mt-3"
                        size="lg"
                        value={login}
                        placeholder="Придумайте логин..."
                        onChange={e => setLogin(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width: '303px', backgroundColor: 'white' }}
                        className="mt-3"
                        size="lg"
                        type="password"
                        value={password}
                        placeholder="Придумайте пароль..."
                        onChange={e => setPassword(e.target.value)} />

                    <div style={{ marginTop: '50px', marginLeft: '30px' }}>
                        <Button
                            style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', borderRadius: '36px', width: '237px', height: '65px', fontSize: '23px', border: "2px solid", backgroundColor: '#595959', borderColor: 'black', marginTop: '38px', color: 'white', textShadow: '-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black' }}
                            variant={"outline-dark"}
                            size="lg"
                            onClick={click}>
                            Зарегистрироваться
                        </Button>
                    </div></Form> </Card><NavBar /></Container>);});


export default Registration;