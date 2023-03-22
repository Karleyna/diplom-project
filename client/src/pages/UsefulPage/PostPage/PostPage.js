import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Form} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOnePost} from "../http/PostAPI";

const PostPage = () => {
    const [Post, setPost] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOnePost(id).then(data => setPost(data))
    }, [])

    return (
        <Container className="mt-3">
            <Form>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + Post.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{Post.name}</h2>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                    </Card>
                </Col>
            </Form>
            <Form className="d-flex flex-column m-3">
                <h1>Описание</h1>
                {Post.info.map((info, index) =>
                    <Form key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Form>
                )}
            </Form>
        </Container>
    );
};

export default PostPage;