import React from 'react';
import {Button, Card, Col, Container, Image, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from 'react-router-dom'
import {fetchOnePost} from "../../../http/postAPI";
import {fetchPostInfo} from "../../../http/postInfoAPI";
import classes from "./PostPage.module.css";
import {useEffect, useState} from "react";
import MyLink from "../../../ui/links/MyLink";
import {USEFUL_ROUTE} from "../../../utils/consts";

const PostPage = () => {
    const [post, setPost] = useState([])
    const [postInfo, setPostInfo] = useState([])
    const {id} = useParams()
    const results = [];
    useEffect(() => {
        fetchOnePost(id).then(data => setPost(data))
    }, [])
    useEffect(() => {
        fetchPostInfo(id).then(data => setPostInfo(data))
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
                {postI.title}: {postI.description}
                <Link href={postI.file} target="_blank">{postI.title}</Link>
            </Row>
        )
    })

    return <div>
        ` <div style={{height: '100vh'}} className={classes.main}>
        <section>
            <div className={classes.img}>
                <img src={process.env.REACT_APP_API_URL + '/' + post.img}/>
            </div>
            <div>
                <div>
                    <h2>{post.name}</h2>
                </div>
            </div>
        </section>
        <section style={{width: '100%'}} className={classes.img}>
            <h1>Описание</h1>

            <div className={classes.description}>
                {results}
            </div>
        </section>
        <div style={{marginTop: '1vw'}}>
            <MyLink to={USEFUL_ROUTE}>Вернуться</MyLink>
        </div>

    </div>
    </div>

};

export default PostPage;