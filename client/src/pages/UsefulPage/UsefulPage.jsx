import React, {useContext, useEffect} from 'react';
import CategoryRow from "./CategoryRow/CategoryRow";
import {observer} from "mobx-react";
import classes from "./UsefulPage.module.css";
import {fetchCategories, fetchPosts} from "../../http/postAPI";
import PostList from "./PostElems/PostList";
import {Context} from "../../index";

const UsefulPage = observer(() => {
    const {post} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => post.setCategories(data))
        fetchPosts(null,  1, 2).then(data => {
            post.setPosts(data.rows)
            post.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchPosts(post.selectedCategory.id, post.page, 2).then(data => {
            post.setPosts(data.rows)
            post.setTotalCount(data.count)
        })
    }, [post.page, post.selectedCategory])


    return <>
            <div className={classes.main}>
                <h1>USEFUL PAGE</h1>
                <CategoryRow/>
                <PostList/>
            </div>
        </>

 });

export default UsefulPage;