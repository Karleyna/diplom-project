import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createPost, fetchPosts, fetchCategories} from "../../http/postAPI";
import {observer} from "mobx-react-lite";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./CreatePost.module.css";


const CreatePost = observer(({show, onHide}) => {
    const {post} = useContext(Context)
    const [name, setName] = useState('')
    const [fileImg, setFileImg] = useState(null)
    const [info, setInfo] = useState([])
    const [file,setFile] = useState(null);

    useEffect(() => {
        fetchCategories().then(data => post.setCategories(data));
        // fetchPosts().then(data => post.setPosts(data));
    }, [])

    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, {title: '', description: '', number: Date.now(), file:selectFile}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile  = e =>{
        setFile(e.target.files[0]);
    }

    const selectFileImg = e => {
        setFileImg(e.target.files[0])
    }

    const addPost = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', fileImg)
        formData.append('categoryId', post.selectedCategory.id)
        formData.append('file', file)
        formData.append('info', JSON.stringify(info))
        createPost(formData).then(data => onHide())
    }

    return (
        <Modal
            active={show}
            setActive={onHide}>
            <section>
                <h2 className={classes}>
                    Добавить пост
                </h2>
            </section>
            <section>
                <Form>
                    <section>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle
                                variant="success">{post.selectedCategory.name || "Выберите категорию"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {post.categories.map(category =>
                                    <Dropdown.Item
                                        onClick={() => post.setSelectedCategory(category)}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </section>

                    <MyInput
                        style={{width: '100%'}}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите заголовок поста"
                    />
                    <Form.Control
                        className="mt-3 mr-3"
                        type="file"
                        onChange={selectFileImg}
                    />
                    <hr/>
                    <div className={classes.sectionBut}>
                        <MyButton
                            style={{fontSize: '1rem'}}
                            onClick={addInfo}
                        >
                            Добавить новый материал
                        </MyButton>
                    </div>

                    {info.map(i =>
                        <section className={classes.newMaterial} key={i.number}>
                            <Col md={3}>
                                <MyInput
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название подзаголовка"
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control
                                    as="textarea"
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите текст"
                                />
                            </Col>
                            <Col className={classes.delBtn} md={2.5}>
                                <MyButton
                                    style={{fontSize: '1rem'}}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </MyButton>

                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    className="mt-3 mr-3"
                                    type="file"
                                    onChange={selectFile}
                                />
                            </Col>
                        </section>
                    )}
                </Form>
            </section>
            <section className={classes.section}>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPost}>Добавить</Button>
            </section>
        </Modal>
    );
});

export default CreatePost;