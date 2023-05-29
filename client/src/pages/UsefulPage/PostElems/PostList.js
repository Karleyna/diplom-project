import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Form, Row} from "react-bootstrap";
import PostItem from "./PostItem";
import {Context} from "../../../index";
import {useEffect} from "react";
import {fetchPosts} from "../../../http/postAPI";


const PostList = observer(() => {
    const {post} = useContext(Context);


    return <>
        <Row className="d-flex" style={{justifyContent: 'space-around'}}>
            {post.posts.map(post => {
                return(
                    <PostItem key={post.id} post={post}/>
                    )

            }

            )}
        </Row>
    </>
});

export default PostList;