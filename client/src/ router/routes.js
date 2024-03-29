import adminPage from "../pages/AdminPage/AdminPage";
import {
    ADMIN_ROUTE, COURSE_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, PERSONAL_ROUTE, POST_ROUTE,
    REGISTRATION_ROUTE,
    TRAINER_ROUTE,
    USEFUL_ROUTE
} from "../utils/consts";

import trainerPage from "../pages/TrainerPage/TrainerPage"
import mainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPages/LoginPage";
import usefulPage from "../pages/UsefulPage/UsefulPage";
import registrationPage from "../pages/LoginPages/RegistrationPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import React from "react";
import PostPage from "../pages/UsefulPage/PostPage/PostPage";
import CoursePage from "../pages/CoursePage/CoursePage";


export const adminRotes = [
    {
        path: ADMIN_ROUTE,
        Component: adminPage
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
        path: POST_ROUTE + '/:id',
        Component: PostPage
    },
]

export const trainerRoutes = [

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
        path: POST_ROUTE + '/:id',
        Component: PostPage
    },
]
export const userRoutes = [
    {
        path: COURSE_ROUTE,
        Component: CoursePage
    },
    {
        path: PERSONAL_ROUTE,
        Component: PersonalPage
    },
    {
        path: COURSE_ROUTE,
        Component: CoursePage
    },
    {
        path: USEFUL_ROUTE,
        Component: usefulPage
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
    }
]