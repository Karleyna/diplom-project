import React from 'react';
import classes from "./CoursePage.module.css";

const CoursePage = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "vh";
            }
        });
    }
    return (
        <>
            <section className={classes.main}>
                <div style={{height:"4vh"}}>

                </div>
                <section>
                    <h1>Ваши курсы</h1>
                </section>
                <section className={classes.courses}>
                    <section className={classes.courseModule}>
                        <div className={classes.tab}>
                            <input id="tab-one" type="checkbox" name="tabs"/>
                            <label htmlFor="tab-one">
                                <h3>Вводный урок</h3>
                            </label>
                            <div className={classes.tabContent}>
                                <p>ОСОБЕННОСТИ методики ФИЗИЧЕСКОЙ и именно ЖЕНСКОЙ САМОЗАЩИТЫ заключаются в том, что:
                                    <p>1. Система подготовки максимально используются психофизические особенности женского организма как преимущества, к примеру, перед мужской психофизикой.</p>
                                    <p>2. Процесс разделяется на 4 (четыре) этапа подготовки каждый, из который соответсвует более высокому уровню   опасности ситуаций, к которым важно подготовиться.</p>
                                    <p>3. Но уже пройдя первый этап (уровень) женщина (девочка, девушка) значительно повышает уровень своей защищённости. Для успешного прохождения первого этапа не требуются особых физические данные женщины.</p>
                                    <p>4. И САМОЕ ИНТЕРЕСНОЕ то, что СОХРАНЯЕТСЯ  ЖЕНСТВЕННОСТЬ, что ОЧЕНЬ ВАЖНО!  Значительно повышается уровень качества  психофизического состояния женщины.</p>
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

        </>

    );
};

export default CoursePage;
