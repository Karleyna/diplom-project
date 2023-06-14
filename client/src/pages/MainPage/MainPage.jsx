import React from "react";
import map from  "./screenMap.png";
import "./MainPage.css";
import {REGISTRATION_ROUTE} from "../../utils/consts";
import MyLink from "../../ui/links/MyLink";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react";


const MainPage = observer(() =>
{
    const {user} = useContext(Context);
    return <>

        <div className="body">
            <main>
                <section className="heading">
                    <div className="text-heading">
                        <h1>Institute of Women's Self-Defense</h1>
                        <h2>Институт Женской Самозащиты</h2>
                    </div>
                </section>
                <section className="main-sections">
                    <section className="about-us">
                        <h2>Немного о нас</h2>
                        <div className="description-org">
                            <p>Институт Женской Самозащиты — это некоммерческая организация, которая занимается обучением женщин методам самозащиты,
                                помогает повысить осведомленность о проблемах насилия и борется за права женщин в обществе.
                                Институт Женской Самозащиты имеет огромное значение для женщин, которые столкнулись с проблемами насилия.
                                Организация помогает женщинам стать более уверенными в себе, повысить уровень осведомленности о проблемах
                                насилия в отношениях и научиться защищать себя в экстремальных ситуациях.
                            </p>
                        </div>
                    </section>
                    <section className="course">
                        <h2>Наши предложения для Вас</h2>
                        <div className="courses">
                            <div className="course-item">
                                <h4>Вводный урок</h4>
                                <p>Главный фактор уровня безопасности женщины, этапы опасных ситуаций, а также особенности
                                    физической женской самозащиты.
                                </p>
                            </div>
                            <div className="course-item">
                                <h4>Виды угроз для женщины</h4>
                                <p>Виды угроз для женщины, а также основные факторы, влияющие
                                    на зашищенность.

                                </p>
                            </div>
                            <div className="course-item">
                                <h4>Мировая проблема насилия над женщиной.</h4>
                                <p>Что такое насилие над женщиной по определению ООН и какова основная опасность?
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="trainers">
                        <h2>Они помогут прийти к результату!</h2>
                        <div className="group-trainers">
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo" id="Valerii"> </div>
                                <div className="trainer-item-text">
                                    <h2>Создатель концепции</h2>
                                    <p>Талисман <br/>Валерий Борисович</p>
                                </div>
                            </a>
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo"  id="Natali"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Трегубова Наталья</p>
                                </div>
                            </a>
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo" id="Pavel">
                                </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Павел Вингородов</p>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className="ad">
                        <h2>Заинтересовали? Тогда вот наше следующее предложение!</h2>
                        <div className="registration-form">
                            <div className="ad-background_">
                                <div className="ad-content_">
                                    <div className="registration-fields">
                                        <p>Зарегистриуйтесь и начните обучение уже сегодня!</p>
                                        <div className="ad-white-border">
                                                <p>При обновлении данных профиля мы сможем лучше познакомиться с Вами!</p>
                                            <div className="line three">
                                                <button type="submit">
                                                    {user.isAuth ?
                                                        <p>Зарегистрироваться</p>
                                                    :
                                                        <p><MyLink to={REGISTRATION_ROUTE} style={{color: "white"}}> Зарегистрироваться</MyLink></p>
                                                    }

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ad-instruction">
                                        <ol className="ad-instruction_steps">
                                            <li>После регистрации проверьте данные в аккаунте.</li>
                                            <li>Далее перейдите во вкладку с курсами и начните обучение!</li>
                                        </ol>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="map-block">
                        <h2>Наше местоположение:</h2>
                        <div className="map">
                           <div>
                               <img className="map" src={map} alt="error"/>

                           </div>
                        </div>
                        <div className="text-address">
                            <p>Очные занятия проходят по адресу:</p>
                            <p>
                                📍 Тружеников, 16а Шлюз м-н, Советский район, Новосибирск, 630058
                            </p>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    </>

}); export default MainPage;