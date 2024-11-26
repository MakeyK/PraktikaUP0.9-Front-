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
import Dropdown from 'react-bootstrap/Dropdown';

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
        <Card style={{ position:'fixed', borderRadius: '36px', borderColor:'white', width:332, height:580, fontFamily:"UnifrakturCook", backgroundColor:'#9CB544', marginTop:'70px'}} className="p-3 #FFFAF4">
            <p style={{fontSize:'32px', display:'flex', width:'270px', marginLeft:'15px', justifyContent:'center', color:'#FFFFFF', fontWeight:'bold', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}>
            Новая заявка
            </p>

            <Form className="d-flex flex-column" style={{}}>
                <Form.Control
                 style={{borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width:'303px', backgroundColor:'#3E3E3E'}}
                className="mt-3"
                size="lg"
                placeholder = "Укажите адрес..."
                />

                <Form.Control
                 style={{borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width:'303px', backgroundColor:'#3E3E3E'}}
                className="mt-3"
                size="lg"
                placeholder = "Укажите номер телефона..."
                />
                <Dropdown style={{marginTop:'15px'}} >
            <Dropdown.Toggle style={{borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width:'303px', backgroundColor:'#3E3E3E'}} variant="light" >
             Выберите дату и время...
            </Dropdown.Toggle>
        </Dropdown>

        <Dropdown style={{marginTop:'15px'}}>
            <Dropdown.Toggle style={{borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width:'303px', backgroundColor:'#3E3E3E' }} variant="light" >
             Выберите вид услуги...
            </Dropdown.Toggle>
        </Dropdown>

        <Dropdown style={{marginTop:'15px'}}>
            <Dropdown.Toggle style={{borderRadius: '36px', height: '56px', fontSize: "14px", border: "2px solid", width:'303px', backgroundColor:'#3E3E3E' }} variant="light" >
             Выберите тип оплаты...
            </Dropdown.Toggle>
        </Dropdown>
            </Form>

                <div style={{marginLeft:'30px', marginTop:'140px'}}>
                <Button
                style={{display:'flex', justifyContent:'center', fontWeight:'bold', borderRadius: '36px', width:'237px', height:'65px', fontSize:'23px', border: "2px solid", backgroundColor:'#595959', borderColor:'black', marginTop:'38px', color:'white', textShadow:'-1px -1px 0 black, 2px -1px 0 black, -2px  2px 0 black, 2px  2px 0 black'}}
                variant={"outline-dark"}
                size="lg"
                            onClick={click}>
                       {isLogin ? '' : 'Отправить заявку'} 
                </Button></div>
        </Card>
        <NavBar2/>
        </Container>
    );
});

export default HistoryRequest;