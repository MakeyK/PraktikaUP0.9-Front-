import React, {useContext, useState, useEffect}  from "react";
import {Card, Form, Col, Nav, ListGroup, ButtonGroup} from 'react-bootstrap'
import {Context} from "../index";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Menu from '../components/Files/menu.png'
import Profil from '../components/Files/profil.png'
import Logo from '../components/Files/logo.png'


const NavBar2 = observer(() => {
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const mainn = async() => {
        let mainn = `main`
        navigate(MAIN_ROUTE)
    }

    return (
        <Navbar style={{height: '74px', backgroundColor: '#9CB544'}} fixed='top'>
            <Container>
                <p style={{fontFamily:'UnifrakturCook', color:'white', width:'267px', height:'27px', fontSize:'24px', fontWeight:'bold'}}>
                    Панель администратора
                </p>
                <ButtonToolbar style={{marginRight:'40px'}}>
          <Button
            style={{borderRadius:'50px', width:'60px', height:'60px', backgroundColor:'white', marginRight:'20px'}}>
                <img src={Profil} style={{width:'35px', height:'35px'}}/>
            </Button>
        </ButtonToolbar>
            </Container>
        </Navbar>
    );
});

export default NavBar2;