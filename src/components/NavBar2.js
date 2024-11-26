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
                <img src={Logo} style={{width: '192px', height:'74px'}}/>
                <ButtonToolbar style={{marginRight:'40px'}}>
        <ButtonGroup className="me-2">
          <Button
            style={{borderRadius:'50px', width:'60px', height:'60px', backgroundColor:'white', marginRight:'20px'}}>
                <img src={Profil} style={{width:'35px', height:'35px'}}/>
            </Button>

            <Button
            style={{borderRadius:'50px', width:'60px', height:'60px', backgroundColor:'white'}}>
                <img src={Menu} style={{width:'35px', height:'35px'}}/>
            </Button>

        </ButtonGroup>
        </ButtonToolbar>
            </Container>
        </Navbar>
    );
});

export default NavBar2;