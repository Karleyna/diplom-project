import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createPost, fetchPosts, updatePost, deletePost} from "../../http/postAPI";
import {fetchCategories} from "../../http/categoryAPI";
import {observer} from "mobx-react-lite";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";
import 'bootstrap/dist/css/bootstrap.min.css';


const CreatePost = observer(({show, onHide}) => {
    const {post} = useContext(Context)
    const [name, setName] = useState('');
    const [idPost, setIdPost] = useState('');
    const [fileImg, setFileImg] = useState(null);
    let results = [];
    let categories = new Map();
    useEffect(() => {
        fetchCategories().then(data => post.setCategories(data));
        fetchPosts().then(data => post.setPosts(data.rows));
    }, [])
    post.categories.forEach(category => {
            categories.set(category.id, category.name)
    })

    post.posts.forEach((property, index) => {
        results.push(
            <Row key={property.id}
                 style={{
                     background: index % 2 === 0 ? 'lightgray' : 'white',
                     padding: 10,
                     width: '90%',
                     borderRadius: '1vh',
                     wordBreak: 'break-all'
                 }}>
                {property.id} : {property.name}, раздел: {categories.get(property.categoryId)}

            </Row>
        )
    })

    const selectFileImg = e => {
        setFileImg(e.target.files[0])
    }

    const addPost = async () => {
        let formData = new FormData();
        if (post.selectedCategory.id === undefined){
            alert("Выберете категорию")
        }
        else if (name===''){
            alert("Введите название")
        }
        else {
            formData.append('name', name);
            formData.append('img', fileImg);
            formData.append('categoryId', post.selectedCategory.id);
            await createPost(formData);
            await updateResults();
            // setName('');
            // setFileImg(null);
        }
    }
    const updatePostById = async () => {
        if (post.selectedCategory.id === undefined){
            alert("Выберете категорию")
        }
        else if (idPost===''){
            alert("Введите номер")
        }
        else {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('img', fileImg)
            formData.append('categoryId', post.selectedCategory.id)
            await updatePost(formData, idPost)
            await updateResults();
            setIdPost('');
            setName('');
            setFileImg(null);

        }
    }
    const deletePostById = async () => {
        if (idPost===''){
            alert("Введите номер")
        }
        else {
            await deletePost(idPost)
            await updateResults();
            setIdPost('');
        }
    }
    const updateResults = async () => {
        results = [];
        let data = await fetchPosts();
        post.setPosts(data.rows);
        post.posts.forEach((property, index) => {
            results.push(
                <Row key={property.id}
                     style={{
                         background: index % 2 === 0 ? 'lightgray' : 'white',
                         padding: 10,
                         width: '90%',
                         borderRadius: '1vh',
                         wordBreak: 'break-all'
                     }}>
                    {property.id} : {property.name}, раздел: {categories.get(property.categoryId)}

                </Row>
            )
        })
    }

    return (
        <Modal
            active={show}
            setActive={onHide}>
            <section>
                <h2 style={{fontSize: '2.5rem'}}>
                    Действия с публикациями
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
                        style={{width: '100%', marginBottom:'1vh'}}
                        value={idPost}
                        onChange={e => setIdPost(e.target.value)}
                        placeholder="Введите номер поста для удаления или обновления"
                    />
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
                    <div style={{display: 'flex', justifyContent: 'space-between', flexFlow:'column', alignItems:'center'}}>
                        {results}
                    </div>
                </Form>
            </section>
            <section style={{margin: '1vw', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPost}>Добавить</Button>
                <Button variant="outline-success" onClick={updatePostById}>Обновить</Button>
                <Button variant="outline-success" onClick={deletePostById}>Удалить</Button>
            </section>
        </Modal>
    );
});

export default CreatePost;