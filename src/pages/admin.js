import React, {useContext, useState}  from "react";
import {Card, Container, Button} from 'react-bootstrap'
import { HISTORYREQUEST } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar3 from "../components/NavBar3";
import FonMetla from "../components/Files/fonmetla.png"
import Vbor from "../components/Files/vbor.png"


const Admin = observer(() => {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#313131"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const historyrequest = async() => {
      let historyrequest = `historyrequest`
      navigate(HISTORYREQUEST)}


    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 154}}>
          <img src={FonMetla} style={{height:'690px', opacity:'50%'}}/>
        <Card style={{ position:'fixed', borderRadius: '36px', borderColor:'white', width:332, height:630, fontFamily:"UnifrakturCook", backgroundColor:'#9CB544', marginTop:'70px'}} className="p-3 #FFFAF4">
            <p style={{fontSize:'18px', display:'flex', width:'270px', marginLeft:'15px', justifyContent:'center', color:'#FFFFFF', fontWeight:'bold', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}>
            Королёв Валентин Николаевич
            <Button
            style={{borderRadius:'50px', width:'45px', height:'45px', backgroundColor:'white'}}>
                <img src={Vbor} style={{width:'20px', height:'20px'}}/>
            </Button></p>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
            fontWeight:'bold'}}>
          <span style={{color:'white', fontSize:'18px'}}>Вид услуги</span>
          <span style={{color:'#C2C2C2'}}>Генеральная уборка</span></div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",}}>
          <span style={{color:'white', fontSize:'18px'}}>Дата и время</span>
          <span style={{fontFamily:'Unica One', color:'#C2C2C2'}}>24.11.2024 10:00</span></div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",}}>
          <span style={{color:'white', fontSize:'18px'}}>Адрес</span>
          <span style={{marginLeft:'36px', color:'#C2C2C2'}}>
            г. Москва, ул. Генерала Кузнецова, д. 36/6, кв. 333
          </span></div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",}}>
          <span style={{color:'white', fontSize:'18px'}}>Тип оплаты</span>
          <span style={{color:'#C2C2C2'}}>Наличные</span></div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",}}>
          <span style={{color:'white', fontSize:'18px'}}>Контактные данные</span>
          <span style={{fontFamily:'Unica One', color:'#C2C2C2'}}>+79157258757</span></div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",}}>
          <span style={{color:'white', fontSize:'18px'}}>Статус заявки</span>
          <span style={{color:'#C2C2C2'}}>Принято</span>

          <Button
            style={{borderRadius:'50px', width:'45px', height:'45px', backgroundColor:'white'}}>
                <img src={Vbor} style={{width:'20px', height:'20px'}}/>
            </Button></div>

            <div style={{marginLeft:'30px'}}>
                <Button
                style={{display:'flex', justifyContent:'center', fontWeight:'bold', borderRadius: '36px', width:'237px', height:'65px', fontSize:'23px', border: "2px solid", backgroundColor:'#595959', borderColor:'black', marginTop:'38px', color:'white', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}
                variant={"outline-dark"}
                size="lg"
                            onClick={historyrequest}>
                       Внести изменения
                </Button></div> 

                <div style={{marginLeft:'30px'}}>
                <Button
                style={{display:'flex', justifyContent:'center', fontWeight:'bold', borderRadius: '36px', width:'237px', height:'65px', fontSize:'23px', border: "2px solid", backgroundColor:'#595959', borderColor:'black', marginTop:'38px', color:'white', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}
                variant={"outline-dark"}
                size="lg"
                            onClick={historyrequest}>
                       Сохранить
                </Button></div></Card><NavBar3/></Container>);});

                
export default Admin;