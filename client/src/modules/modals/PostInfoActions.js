import React from 'react';
import {useEffect, useState} from "react";
import {fetchPostInfo, fetchPosts} from "../../http/postAPI";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";

const PostInfoActions = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const [postName, setPostName] = useState('');
    const [postId, setPostId] = useState(6);
    const [idPostInfo, setIdPostInfo] = useState('');
    const [postInfo, setPostInfo] = useState([]);
    const [posts, setPosts] = useState([]);
    let results = [];
    useEffect(() => {
        fetchPostInfo(1).then(data => setPostInfo(data))
    }, [])
    useEffect(() => {
        fetchPosts(null, -1).then(data => setPosts(data))
    }, [])
    postInfo.forEach((postI, index) => {
        results.push(
            <Row key={postI.id}
                 style={{
                     background: index % 2 === 0 ? 'lightgray' : 'white',
                     padding: 10,
                     width: '70%',
                     borderRadius: '1vh'
                 }}>
                {postI.id} : {postI.title}: {postI.description}
            </Row>
        )
    });

    const updateResults = async () => {
       let data;
       data = await fetchPostInfo(postId);
        setPostInfo(data);
        // setIdPostInfo('');
        results = [];
        // setValue('');
        postInfo.forEach((property, index) => {
            results.push(
                <Row key={property.id}
                     style={{
                         background: index % 2 === 0 ? 'lightgray' : 'white',
                         padding: 10,
                         width: '70%',
                         borderRadius: '1vh'
                     }}>
                    {property.id} : {property.title}: {property.description}

                </Row>
            )
        });
    }
    // const addPostInfo = async () => {
    //     try {
    //         await createPostInfo({name: value});
    //         await updateResults();
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    //
    //
    // }
    // const deletePostInfoById = async () => {
    //     try {
    //         await deletePostInfo(idPostInfo);
    //         await updateResults();
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    //
    // }
    // const updatePostInfoById = async () => {
    //     try {
    //         await updatePostInfo(idPostInfo, value);
    //         await updateResults();
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    //
    // }
    //

    return (
        <Modal
            active={show}
            setActive={onHide}
        >
            <h3>
                Price
            </h3>

            <section>
                <Form>
                    <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle
                                variant="success">{postName || "Выберите публикацию"}</Dropdown.Toggle>
                            <Dropdown.Menu>
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
                            value={idPostInfo}
                            onChange={e => setIdPostInfo(e.target.value)}
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
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                {/*<Button variant="outline-success" onClick={addPostInfo}>Добавить</Button>*/}
                {/*<Button variant="outline-success" onClick={deletePostInfoById}>Delete</Button>*/}
                {/*<Button variant="outline-success" onClick={updatePostInfoById}>Update</Button>*/}

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