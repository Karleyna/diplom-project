import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import {fetchOnePost} from "../../../http/postAPI";
import classes from "./PostPage.module.css";


const PostPage = () => {
    const [post, setPost] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOnePost(id).then(data => setPost(data))
    }, [])

    return <div>
        ` <div style={{height: '100vh'}} className={classes.main}>
        <section>
            <div className={classes.img}>
                <img  src={process.env.REACT_APP_API_URL + '/' + post.img}/>
            </div>
            <div>
                <div>
                    <h2>{post.name}</h2>
                </div>
            </div>
        </section>
        <section style={{width:'80%'}}>
            <h1>Описание</h1>
            {post.info.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
            )}
        </section>
    </div>
    </div>

};

export default PostPage;