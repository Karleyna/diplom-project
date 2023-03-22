import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Form} from "react-bootstrap";
import PostItem from "./PostItem";
import {Context} from "../../../index";


const PostList = observer(() => {
    const {post} = useContext(Context);

    return (
        <Form className="d-flex">
            {post.posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </Form>
    );
});

export default PostList;