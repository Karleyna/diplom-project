import React, {useEffect, useState} from 'react';
import {Form, Button, Row} from "react-bootstrap";
import {createCategory, deleteCategory, fetchCategories, fetchPostInfo, updateCategory} from "../../http/postAPI";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";



const CreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const results = [];
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
    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })

    }
    const deleteCategoryById = async () => {
        try {
            await deleteCategory(idCategory).then(data =>{
                    setIdCategory('');
                    onHide();
                }
            )
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const updateCategoryById = async () => {
        try {
            console.log(idCategory, value)
            await updateCategory(idCategory, value);
              setIdCategory('');
               onHide();


        } catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <Modal
            active={show}
            setActive={onHide}
        >
            <h3>
                Добавить раздел
            </h3>

            <section>
                <Form>
                    <section style={{display:'flex', justifyContent:'space-around', margin:'1vh', flexFlow:'column'}}>
                    <MyInput
                        style={{margin: '1vh'}}
                        value={idCategory}
                        onChange={e => setIdCategory(e.target.value)}
                        placeholder={"Введите ID раздела"}
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
            <section style={{display:'flex', justifyContent:'space-around', margin:'1vh'}}>
                <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
                <Button variant="outline-success" onClick={deleteCategoryById}>Delete</Button>
                <Button variant="outline-success" onClick={updateCategoryById}>Update</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </section>
            <section>
                <div style={{display:'flex', justifyContent:'center', margin:'2vh', flexFlow:'column',alignItems:'center'}}>
                    {results}
                </div>
            </section>
            <section style={{margin: '1vh'}}>

            </section>
        </Modal>
    );
};

export default CreateCategory;