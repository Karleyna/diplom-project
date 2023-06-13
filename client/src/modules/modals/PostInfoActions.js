import React from 'react';
import {useEffect, useState} from "react";
import {createPostInfo,deletePostInfo,fetchPostInfo,updatePostInfo} from "../../http/postInfoAPI";
import {fetchPosts, fetchPostsTrowName} from "../../http/postAPI";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";

const PostInfoActions = ({show, onHide}) => {
    const [searchValue, setSearchValue] = useState('');
    const [postName, setPostName] = useState('');
    const [postId, setPostId] = useState(6);
    const [titlePostInfo, setTitlePostInfo] = useState('');
    const [description, setDescription] = useState('');
    const [propertyId, setPropertyId] = useState('');
    const [postInfo, setPostInfo] = useState([]);
    const [posts, setPosts] = useState([]);
    const [file, setFile] = useState(null);
    let results = [];
    useEffect(() => {
        fetchPosts(null, -1).then(data => setPosts(data))
    }, [])
    postInfo.forEach((postI, index) => {
        results.push(
            <Row key={postI.id}
                 style={{
                     background: index % 2 === 0 ? 'lightgray' : 'white',
                     padding: 10,
                     width: '90%',
                     borderRadius: '1vh',
                     wordBreak: 'break-all'
                 }}>
                {postI.id} : {postI.title}: {postI.description}
            </Row>
        )
    });
    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const updateResults = async () => {
        let data;
        data = await fetchPostInfo(postId);
        setPostInfo(data);
        results = [];
        postInfo.forEach((property, index) => {
            results.push(
                <Row key={property.id}
                     style={{
                         background: index % 2 === 0 ? 'lightgray' : 'white',
                         padding: 10,
                         width: '90%',
                         borderRadius: '1vh',
                         wordBreak: 'break-all'
                     }}>
                    {property.id} : {property.title}: {property.description}

                </Row>
            )
        });
    }
    const updateDropdown = async () => {
        let data;
        if (searchValue === '') {
            data = await fetchPosts(null, -1)
        } else {
            data = await fetchPostsTrowName(-1, searchValue);
        }
        setPosts(data);
        posts.map(post =>
            <Dropdown.Item
                key={post.id}
                onClick={() => {
                    setPostId(post.id)
                    setPostName(post.name)
                }}
            >
                {post.name}
            </Dropdown.Item>
        )
    }
    const addPostInfo = async () => {
        try {
            if (titlePostInfo === '') {
                alert('Введите заголовок')
            } else {
                const formData = new FormData()
                formData.append('title', titlePostInfo)
                formData.append('description', description)
                formData.append('file', file)
                await createPostInfo(formData, postId);
                await updateResults();
                console.log(titlePostInfo, description, postId, file)
                setTitlePostInfo('');
                setDescription('');
                setFile(null);

            }

        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const deletePostInfoById = async () => {
        try {
            await deletePostInfo(postId,propertyId);
            await updateResults();
            setPropertyId('');
            setTitlePostInfo('');
            setDescription('');
            setFile(null);
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const updatePostInfoById = async () => {
        try {
            if (titlePostInfo === '') {
                alert('Введите заголовок')
            } else {
                const formData = new FormData()
                formData.append('title', titlePostInfo)
                formData.append('description', description)
                formData.append('file', file)
                console.log(propertyId, postId)
                await updatePostInfo(postId, propertyId, formData);
                await updateResults();
                setPropertyId('');
                setTitlePostInfo('');
                setDescription('');
                setFile(null);
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
               Информация в публикации
            </h3>

            <section>
                <Form>
                    <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                        <Dropdown className="mt-2 mb-lg-2">
                            <Dropdown.Toggle
                                variant="success">{postName || "Выберите публикацию"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MyInput
                                    style={{margin: '0.5vh'}}
                                    value={searchValue}
                                    onChange={async e => {
                                        setSearchValue(e.target.value);
                                        await updateDropdown();
                                    }}
                                    placeholder={"Поиск"}
                                />
                                {posts.map(post =>
                                    <Dropdown.Item
                                        key={post.id}
                                        onClick={() => {
                                            setPostId(post.id)
                                            setPostName(post.name)
                                        }}
                                    >
                                        {post.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="outline-success" onClick={updateResults}>Обновить результаты</Button>
                    </section>
                    <section
                        style={{display: 'flex', justifyContent: 'space-around', margin: '1vh', flexFlow: 'column'}}>
                        <MyInput
                            style={{margin: '1vh'}}
                            value={propertyId}
                            onChange={e => setPropertyId(e.target.value)}
                            placeholder={"Введите номер заголовка для удаления или обновления"}
                        />
                        <MyInput
                            style={{margin: '1vh'}}
                            value={titlePostInfo}
                            onChange={e => setTitlePostInfo(e.target.value)}
                            placeholder={"Введите заголовок"}
                        />
                        <Form.Control as="textarea" rows={3}
                                      style={{
                                          margin: '1vh',
                                          border: "black solid 0.5px   ",
                                          width: '95%',
                                          paddingLeft: '1vh'
                                      }}
                                      value={description}
                                      onChange={e => setDescription(e.target.value)}
                                      placeholder={"Введите описание"}
                        />
                        <Form.Control
                            style={{width: '94%', marginLeft: '1vw'}}
                            className="mt-3 mr-3"
                            type="file"
                            onChange={selectFile}
                        />
                    </section>
                </Form>
            </section>
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                <Button variant="outline-success" onClick={addPostInfo}>Добавить</Button>
                <Button variant="outline-success" onClick={deletePostInfoById}>Удалить</Button>
                <Button variant="outline-success" onClick={updatePostInfoById}>Обновить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </section>
            <section>
                <div style={{
                    display: 'flex',
                    zIndex: '2',
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

export default PostInfoActions;