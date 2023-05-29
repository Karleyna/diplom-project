import React from 'react';
import classes from "./CoursePage.module.css";

const CoursePage = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
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
                <div style={{height: "4vh"}}>

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
                                <p>ОСОБЕННОСТИ КОНЦЕПЦИИ «ЖЕНСКАЯ САМОЗАЩИТА».</p>

                                <p> Уровень безопасности женщины и её близких зависит от многих факторов, которые будут
                                    подробно представлены в следующих уроках.

                                    Если коротко то БЕЗОПАСНОСТЬ ЖЕНЩИНЫ в БОЛЬШЕЙ СТЕПЕНИ ЗАВИСИТ от УРОВНЯ
                                    ЦИВИЛИЗОВАННОСТИ ОБЩЕСТВА, в котором живет женщина.
                                    К примеру, как только этот уровень опускается до криминализации и войны то в первую
                                    очередь страдают женщины.

                                    Но также БЕЗОПАСНОСТЬ ЖЕНЩИНЫ ЗАВИСИТ и ОТ САМОЙ ЖЕНЩИНЫ - от уровня развития её
                                    менталитета (интеллект +культура), от её образованности, психофизических качеств … и
                                    конечно же подготовленности.

                                    Мы хотим способствовать развитию женщин с целю повышения уровня Вашей безопасности.
                                    С акцентом на «САМОСТОЯТЕЛЬНАЯ ЗАЩИТА».
                                    До такой степени Вашей подготовки, чтобы Вы не попадали в опасные ситуации совсем.
                                    ЖИЛИ В ВЫСОКО ЦИВИЛИЗОВАННОМ (безопасном) ОБЩЕСТВЕ.

                                    Важно, чтобы ВЫ были ЗАЩИЩЕНЫ ИНТЕЛЛЕКТОМ, ЗНАНИЯМИ и НАВЫКАМИ, КУЛЬТУРОЙ
                                    (ценностями, принципами…), ФИНАНСАМИ, ЭКОЛОГИЕЙ и ОКРУЖАЮЩИМИ ЛЮДЬМИ.</p>
                                <p>ОСОБЕННОСТИ методики ФИЗИЧЕСКОЙ и именно ЖЕНСКОЙ САМОЗАЩИТЫ заключаются в том, что:
                                    <p> 1. Система подготовки максимально используются психофизические особенности
                                        женского организма как преимущества, к примеру, перед мужской психофизикой.
                                        <br/>2. Процесс разделяется на 4 (четыре) этапа подготовки каждый, из который
                                        соответсвует более высокому уровню опасности ситуаций, к которым важно
                                        подготовиться.
                                        <br/>3. Но уже пройдя первый этап (уровень) женщина (девочка, девушка)
                                        значительно повышает уровень своей защищённости. Для успешного прохождения
                                        первого этапа не требуются особых физические данные женщины.
                                        <br/>4. И САМОЕ ИНТЕРЕСНОЕ то, что СОХРАНЯЕТСЯ ЖЕНСТВЕННОСТЬ, что ОЧЕНЬ ВАЖНО!
                                        Значительно повышается уровень качества психофизического состояния женщины.</p>
                                </p>
                                <p>ЭТАПЫ ОПАСНЫХ СИТУАЦИЙ.
                                    <p>
                                        1. ПРОАКТИВНАЯ - ВХОД. До возникновения опасной ситуации. Необходимо заранее
                                        подготовиться. Можно (1.1) предсказать (1.2) предупредить (1.3) не допустить
                                        опасную
                                        ситуацию и не входить в неё.
                                        Один из показателей высокого уровня интеллекта человека - это прогнозирование.
                                        <br/> 2. РЕАКТИВНАЯ - ЭПИЦЕНТР опасной ситуации. Необходимо действовать
                                        реактивно, в
                                        зависимости от вида и уровня опасности ситуации. Задача - оперативный выход
                                        из
                                        опасной ситуации с минимальными потерями для здоровья (сохранение жизни).
                                        <br/> 3. ПОСТАКТИВНАЯ-ВЫХОД из опасной ситуации. Совершение оперативных
                                        действий:
                                        (3.1)
                                        Самостоятельное оказание мед.помощи и фикция фактов опасной ситуации.
                                        (3.2)
                                        Обращение в медицинское учреждение. (3.3) Обращение в полицию и др.
                                        правоохранительные органы. (3.4) Обращение к родственникам, друзьям, …
                                        (3.5)
                                        Обращение в правозащитную общественную организацию (3.6) Прохождение
                                        лечения,
                                        восстановления и реабилитации. (3.7) Участие в судебных процессах.
                                    </p>
                                    <h5>Тест:</h5>
                                    <a href="https://forms.gle/S6bhvm9e9nnSNSBk8">Тест по вводному уроку</a>
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
