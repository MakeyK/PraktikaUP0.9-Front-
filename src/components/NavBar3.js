import React, {useContext}  from "react";
import {Context} from "../index";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {ADMIN_ROUTE, NEWREQUEST} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Profil from '../components/Files/profil.png'


const NavBar3 = observer(() => {
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const admin = async() => {
        let admin = `admin`
        navigate(ADMIN_ROUTE)}
    const newrequest = async() => {
        let newrequest = `newrequest`
        navigate(NEWREQUEST)}
    return (
        <Navbar style={{height: '74px', backgroundColor: '#9CB544'}} fixed='top'>
            <Container>
                <p style={{fontFamily:'UnifrakturCook', color:'white', width:'267px', height:'27px', fontSize:'24px', fontWeight:'bold'}}>
                    Панель администратора</p>
                <ButtonToolbar style={{marginRight:'40px'}}>
          <Button
            style={{borderRadius:'50px', width:'60px', height:'60px', backgroundColor:'white', marginRight:'20px'}}
            onClick={newrequest}>
                <img src={Profil} style={{width:'35px', height:'35px'}}/>
            </Button></ButtonToolbar></Container></Navbar>);});

export default NavBar3;