import React, {useContext}  from "react";
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';
import Logo from './Files/logo.png'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate =useNavigate()

    return (
        <Navbar style={{height: '74px', backgroundColor: '#9CB544'}} fixed='top'>
            <Container>
                <img src={Logo} style={{width: '192px', height:'74px', marginLeft: '69px'}}/>
            </Container>
        </Navbar>
    );
});

export default NavBar;