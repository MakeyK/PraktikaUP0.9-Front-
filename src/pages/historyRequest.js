import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Button, ButtonGroup } from 'react-bootstrap'
import { NEWREQUEST } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { login, registration, getAll } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NavBar2 from "../components/NavBar2";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Strela from '../components/Files/Strela.png'
import Strela2 from '../components/Files/Strela1.png'
import FonMetla from "../components/Files/fonmetla.png"
import UserRequest from "../store/userRequest";


const HistoryRequest = observer(() => {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionY = "450px"
  document.body.style.backgroundColor = "#313131"
  const { user } = useContext(Context)
  const {UserRequest} = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()
  const newrequest = async () => {
    let newrequest = `newrequest`
    navigate(NEWREQUEST)
  }

  const getAllRequest = async () => {
    try {
      const response = await getAll()
      console.log(response)
      return response
    } catch (error) {
      alert(error)
    }
  }

   useEffect(() => {
     getAllRequest().then(data => { UserRequest.setUserRequest(data)})
   }, [])

  return (
    <Container className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 154 }}>
      <img src={FonMetla} style={{ height: '690px', opacity: '50%' }} />
      <Card style={{ position: 'fixed', borderRadius: '36px', borderColor: 'white', width: 332, height: 580, fontFamily: "UnifrakturCook", backgroundColor: '#9CB544', marginTop: '50px' }} className="p-3 #FFFAF4">
        <p style={{ fontSize: '32px', display: 'flex', width: '270px', marginLeft: '15px', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', textShadow: '-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black' }}>
          История заявок</p>
        <p style={{ display: 'flex', justifyContent: 'right', fontFamily: 'Unica One' }}>
          22.10.2024 </p>
        <div className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
            fontWeight: 'bold'
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Вид услуги</span>
          <span style={{ color: '#C2C2C2' }}>{UserRequest.getUserRequest().map((data) => <div>{data.type_service}</div>)}</span></div>
        <div className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Дата и время</span>
          <span style={{ fontFamily: 'Unica One', color: '#C2C2C2' }}>{UserRequest.getUserRequest().map((data) => <div>{data.desired_date_and_time.split("-")[2].split("T")[0]}.
                                {data.desired_date_and_time.split("-")[1]}.{data.desired_date_and_time.split("-")[0]} в {data.desired_date_and_time.split("-")[2].split("T")[1].split(".")[0]}</div>)}</span></div>
        <div className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Адрес</span>
          <span style={{ marginLeft: '36px', color: '#C2C2C2' }}>
          {UserRequest.getUserRequest().map((data) => <div>{data.adress}</div>)}</span></div>
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Тип оплаты</span>
          <span style={{ color: '#C2C2C2' }}>{UserRequest.getUserRequest().map((data) => <div>{data.payment_type}</div>)}</span></div>
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Контактные данные</span>
          <span style={{ fontFamily: 'Unica One', color: '#C2C2C2' }}>{UserRequest.getUserRequest().map((data) => <div>{data.contacts}</div>)}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Статус заявки</span>
          <span style={{ color: '#C2C2C2' }}>{UserRequest.getUserRequest().map((data) => <div>{data.status_request}</div>)}</span>
        </div>
        <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup className="me-2">
            <Button
              style={{ borderRadius: '50px', width: '50px', height: '50px', backgroundColor: 'white' }}>
              <img src={Strela2} style={{ width: '30px', height: '30px' }} />
            </Button>
            <Button
              style={{ borderRadius: '50px', width: '50px', height: '50px', backgroundColor: 'white', marginLeft: '30px' }}>
              <img src={Strela} style={{ width: '30px', height: '30px' }} />
            </Button></ButtonGroup></ButtonToolbar>
        <div style={{ marginLeft: '30px' }}>
          <Button
            style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', borderRadius: '36px', width: '237px', height: '65px', fontSize: '23px', border: "2px solid", backgroundColor: '#595959', borderColor: 'black', marginTop: '38px', color: 'white', textShadow: '-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black' }}
            variant={"outline-dark"}
            size="lg"
            onClick={newrequest}>
            Создать заявку
          </Button></div></Card><NavBar2 /></Container>);
});


export default HistoryRequest;