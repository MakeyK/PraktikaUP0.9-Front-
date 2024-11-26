import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, ButtonGroup} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar2 from "../components/NavBar2";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Strela from '../components/Files/Strela.png'
import Strela2 from '../components/Files/Strela1.png'
import FonMetla from "../components/Files/fonmetla.png"


const HistoryRequest = observer(() => {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor="#313131"
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_check,setPasswordCheck] = useState('')
    const click = async () =>{
    try{
    if (isLogin){
    const response = await login(email, password, password_check)
}
    else{
    const response = await registration(email, password, password_check)
    }
    user.setUser()
    user.setIsAuth(true)
    navigate(LOGIN_ROUTE)}
    catch(e){
    alert(e)
    }
    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center'
        style = {{height: window.innerHeight - 154}}>
          <img src={FonMetla} style={{height:'690px', opacity:'50%'}}/>
        <Card style={{ position:'fixed', borderRadius: '36px', borderColor:'white', width:332, height:580, fontFamily:"UnifrakturCook", backgroundColor:'#9CB544', marginTop:'50px'}} className="p-3 #FFFAF4">
            <p style={{fontSize:'32px', display:'flex', width:'270px', marginLeft:'15px', justifyContent:'center', color:'#FFFFFF', fontWeight:'bold', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}>
            История заявок
            </p>

        <p style={{display:'flex', justifyContent:'right', fontFamily:'Unica One'}}>
            22.10.2024
        </p>
        {/* Service Details */}
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
            fontWeight:'bold'
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Вид услуги</span>
          <span style={{color:'#C2C2C2'}}>Генеральная уборка</span>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Дата и время</span>
          <span style={{fontFamily:'Unica One', color:'#C2C2C2'}}>24.11.2024 10:00</span>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Адрес</span>
          <span style={{marginLeft:'36px', color:'#C2C2C2'}}>
            г. Москва, ул. Генерала Кузнецова, д. 36/6, кв. 333
          </span>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Тип оплаты</span>
          <span style={{color:'#C2C2C2'}}>Наличные</span>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Контактные данные</span>
          <span style={{fontFamily:'Unica One', color:'#C2C2C2'}}>+79157258757</span>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{
            backgroundColor: "#3F3F3F",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
        >
          <span style={{color:'white', fontSize:'18px'}}>Статус заявки</span>
          <span style={{color:'#C2C2C2'}}>Принято</span>
      </div>
      <ButtonToolbar style={{display:'flex', justifyContent:'center'}}>
        <ButtonGroup className="me-2">
          <Button
            style={{borderRadius:'50px', width:'50px', height:'50px', backgroundColor:'white'}}>
                <img src={Strela2} style={{width:'30px', height:'30px'}}/>
            </Button>

            <Button
            style={{borderRadius:'50px', width:'50px', height:'50px', backgroundColor:'white', marginLeft:'30px'}}>
                <img src={Strela} style={{width:'30px', height:'30px'}}/>
            </Button>
        </ButtonGroup>
        </ButtonToolbar>
                <div style={{marginLeft:'30px'}}>
                <Button
                style={{display:'flex', justifyContent:'center', fontWeight:'bold', borderRadius: '36px', width:'237px', height:'65px', fontSize:'23px', border: "2px solid", backgroundColor:'#595959', borderColor:'black', marginTop:'38px', color:'white', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Создать заявку'} 
                </Button>
                 </div>
        </Card>
        <NavBar2/>
        </Container>
    );
});

export default HistoryRequest;