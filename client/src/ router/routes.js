import adminPage from "../pages/AdminPage/AdminPage";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, MEDICAL_ROUTE, PERSONAL_ROUTE, POST_ROUTE,
    REGISTRATION_ROUTE,
    TRAINER_ROUTE,
    USEFUL_ROUTE
} from "../utils/consts";

import trainerPage from "../pages/TrainerPage/TrainerPage"
import mainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPages/LoginPage";
import usefulPage from "../pages/UsefulPage/UsefulPage";
import medicalPage from "../pages/MedicalPage/MedicalPage";
import registrationPage from "../pages/LoginPages/RegistrationPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import MyInput from "../ui/inputs/MyInput";
import React from "react";
import PostPage from "../pages/UsefulPage/PostPage/PostPage";


export const adminRotes = [
    {
        path: ADMIN_ROUTE,
        Component: adminPage
    },
]

export const authRoutes = [

    {
        path: TRAINER_ROUTE,
        Component: trainerPage
    },
    {
        path: PERSONAL_ROUTE,
        Component: PersonalPage
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
        path: POST_ROUTE + '/:id',
        Component: PostPage
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
        path: MEDICAL_ROUTE,
        Component: medicalPage
    }
]