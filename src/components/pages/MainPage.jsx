import React from "react"
import icon from "../pageComponents/iwsd icon.png";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/MainPage.css";
const MainPage = () =>
{
    return <>
        <Header></Header>
        <body>
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
                            <p>
                                Также как постоянный количественный рост и сфера нашей активности
                                создаёт предпосылки для кластеризации усилий. В частности,
                                синтетическое тестирование влечет за собой процесс внедрения и
                                модернизации поставленных обществом задач.
                            </p>
                            <p>В целом, конечно, семантический разбор внешних противодействий
                                создаёт предпосылки для распределения внутренних резервов и ресурсов.
                                Являясь всего лишь частью общей картины, акционеры крупнейших
                            </p>
                        </div>
                    </section>
                    <section className="course">
                        <h2>Наши предложения для Вас</h2>
                        <div className="courses">
                            <div className="course-item">
                                <h4>Курс такой-то</h4>
                                <p>Учитывая ключевые сценарии поведения, перспективное планирование предоставляет
                                    широкие возможности для модели развития.
                                </p>
                            </div>
                            <div className="course-item">
                                <h4>Курс такой-то</h4>
                                <p>Учитывая ключевые сценарии поведения, перспективное планирование предоставляет
                                    широкие возможности для модели развития.
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
                            <a href="/src/components/pages" className="trainer-item">
                                <div className="trainer-photo"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Описание Описание Описание </p>
                                </div>
                            </a>
                            <a href="/src/components/pages" className="trainer-item">
                                <div className="trainer-photo"> </div>
                                <div className="trainer-item-text">
                                    <h2>Тренер</h2>
                                    <p>Описание Описание Описание </p>
                                </div>
                            </a>
                            <a href="/src/components/pages" className="trainer-item">
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
                                <div className="registration-fields">
                                    <h4>Зарегистриуйтесь и получите мастер-класс в подарок!</h4>
                                    <div className="ad-white-border">
                                    </div>
                                </div>
                                <div className="ad-instruction">
                                    <ol className="ad-instruction_steps">
                                        <li>После регистрации подтвердите свой аккаунт, перейдя по ссылке в письме.</li>
                                        <li>Далее перейдите во вкладку с курсами и начните обучение уже сегодня!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </body>
        <Footer></Footer>
    </>

}; export default MainPage;