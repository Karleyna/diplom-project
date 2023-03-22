import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Form} from "react-bootstrap";
import PostItem from "./postItem";

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