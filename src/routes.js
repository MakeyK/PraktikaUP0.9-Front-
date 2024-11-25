import Auth from "./pages/auth"
import Registration from "./pages/registration"
import Main from "./pages/mainpage"
import HistoryRequest from "./pages/historyRequest"
//import Admin from "./pages/admin"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, HISTORYREQUEST } from "./utils/consts"

export const authRoutes = [
   
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HISTORYREQUEST,
        Component: HistoryRequest
    }
]