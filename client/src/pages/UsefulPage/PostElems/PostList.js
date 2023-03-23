import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Form, Row} from "react-bootstrap";
import PostItem from "./PostItem";
import {Context} from "../../../index";


const PostList = observer(() => {
    const {post} = useContext(Context);

    return <>
        <Row className="d-flex">
            {post.posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </Row>
    </>
});

export default PostList;