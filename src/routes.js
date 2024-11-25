import Auth from "./pages/auth"
import Registration from "./pages/registration"
import HistoryRequest from "./pages/historyRequest"
//import Admin from "./pages/admin"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HISTORYREQUEST } from "./utils/consts"

export const authRoutes = [
   
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
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