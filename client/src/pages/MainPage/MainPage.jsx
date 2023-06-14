import React from "react";
import "./MainPage.css";
import map from  "./screenMap.png";


const MainPage = () =>
{

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
                                <h4>Курс такой-то</h4>
                                <p>Учитывая ключевые сценарии поведения, перспективное планирование предоставляет
                                    широкие возможности для модели развития.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="trainers">
                        <h2>Они помогут прийти к результату!</h2>
                        <div className="group-trainers">
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Описание Описание Описание </p>
                                </div>
                            </a>
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Описание Описание Описание </p>
                                </div>
                            </a>
                            <a href="/client/src/pages" className="trainer-item">
                                <div className="trainer-photo"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Описание Описание Описание </p>
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
                                        <p>Зарегистриуйтесь и получите мастер-класс в подарок!</p>
                                        <div className="ad-white-border">
                                            <div className="line one">
                                                <input type="text" placeholder="Имя"/>
                                                <input type="telephone" placeholder="Телефон"/>
                                            </div>
                                            <div className="line two">
                                                <input type="email" placeholder="Почта"/>
                                            </div>
                                            <div className="line three">
                                                <button type="submit">
                                                    <p>Зарегистрироваться</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ad-instruction">
                                        <ol className="ad-instruction_steps">
                                            <li>После регистрации проверьте данные в аккаунте.</li>
                                            <li>Далее перейдите во вкладку с курсами и начните обучение уже сегодня!</li>
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

}; export default MainPage;