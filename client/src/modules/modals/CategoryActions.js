import React, {useEffect, useState} from 'react';
import {Form, Button, Row} from "react-bootstrap";
import {createCategory, deleteCategory, fetchCategories, updateCategory} from "../../http/categoryAPI";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";


const CategoryActions = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [categories, setCategories] = useState([]);
    let results = [];
    useEffect(() => {
        fetchCategories().then(data => setCategories(data))
    }, []);
    categories.forEach((category, index) => {
        results.push(
            <Row key={category.id}
                 style={{
                     background: index % 2 === 0 ? 'lightgray' : 'white',
                     padding: 10,
                     width: '70%',
                     borderRadius: '1vh'
                 }}>
                {category.id}: {category.name}

            </Row>
        )
    });
    const updateResults = async () => {
        let data;
        data = await fetchCategories();
        setCategories(data);
        setIdCategory('');
        results = [];
        setValue('');
        categories.forEach((category, index) => {
            results.push(
                <Row key={category.id}
                     style={{
                         background: index % 2 === 0 ? 'lightgray' : 'white',
                         padding: 10,
                         width: '70%',
                         borderRadius: '1vh'
                     }}>
                    {category.id}: {category.name}

                </Row>
            )
        });
    }
    const addCategory = async () => {
        try {
            if (value===''){
              alert('Введите название')
            }
            else {
                await createCategory({name: value});
                await updateResults();
            }

        } catch (e) {
            alert(e.response.data.message)
        }


    }
    const deleteCategoryById = async () => {
        try {
            if (idCategory==='') {
                alert('Введите номер')
            }
            else {
                await deleteCategory(idCategory);
                await updateResults();
            }

        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const updateCategoryById = async () => {
        try {
            if (idCategory==='') {
                alert('Введите номер')
            }
            else if (value===''){
                alert('Введите название')
            }
            else{
                await updateCategory(idCategory, value);
                await updateResults();
            }

        } catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <Modal
            active={show}
            setActive={onHide}
        >
            <h3 style={{fontSize: '2.5rem'}}>
                Действия с категориями
            </h3>

            <section>
                <Form>
                    <section
                        style={{display: 'flex', justifyContent: 'space-around', margin: '1vh', flexFlow: 'column'}}>
                        <MyInput
                            style={{margin: '1vh'}}
                            value={idCategory}
                            onChange={e => setIdCategory(e.target.value)}
                            placeholder={"Введите ID раздела для обновления или удаления"}
                        />
                        <MyInput
                            style={{margin: '1vh'}}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введите название раздела"}
                        />
                    </section>
                </Form>
            </section>
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh',  overflow:'auto'}}>
                <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
                <Button variant="outline-success" onClick={deleteCategoryById}>Удалить</Button>
                <Button variant="outline-success" onClick={updateCategoryById}>Обновить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </section>
            <section>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '2vh',
                    flexFlow: 'column',
                    alignItems: 'center'
                }}>
                    {results}
                </div>
            </section>
            <section style={{margin: '1vh'}}>

            </section>
        </Modal>
    );
};

export default CategoryActions;