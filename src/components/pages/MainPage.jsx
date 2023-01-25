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
            </main>
        </body>
        <Footer></Footer>
    </>

}; export default MainPage;