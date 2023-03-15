import adminPage from "../pages/AdminPage/AdminPage";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, MEDICAL_ROUTE,
    REGISTRATION_ROUTE,
    STUDENT_ROUTE,
    TRAINER_ROUTE, UPDATE_ROUTE,
    USEFUL_ROUTE
} from "../utils/consts";
import trainerPage from "../pages/TrainerPage/TrainerPage"
import mainPage from "../pages/MainPage/MainPage";
import studentPage from "../pages/StudentPage/StudentPage";
import LoginPage from "../pages/LoginPages/LoginPage";
import usefulPage from "../pages/UsefulPage/UsefulPage";
import medicalPage from "../pages/MedicalPage/MedicalPage";
import registrationPage from "../pages/LoginPages/RegistrationPage";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: adminPage
    },
    {
        path: TRAINER_ROUTE,
        Component: trainerPage
    },
    {
        path: STUDENT_ROUTE,
        Component: studentPage
    },

]
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: mainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: registrationPage
    },
    {
        path: USEFUL_ROUTE,
        Component: usefulPage
    },
    {
        path: MEDICAL_ROUTE,
        Component: medicalPage
    },
    {
        path: UPDATE_ROUTE,
        Component: medicalPage
    },
]