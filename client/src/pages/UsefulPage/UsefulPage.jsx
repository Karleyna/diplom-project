import React, {useContext, useEffect} from 'react';
import CategoryRow from "./CategoryRow/CategoryRow";
import {observer} from "mobx-react";
import classes from "./UsefulPage.module.css";
import {fetchPosts} from "../../http/postAPI";
import {fetchCategories} from "../../http/categoryAPI";
import PostList from "./PostElems/PostList";
import {Context} from "../../index";
import Pages from "../../modules/Pages";

const UsefulPage = observer(() => {
    const {post} = useContext(Context);

    useEffect(() => {
        fetchCategories().then(data => post.setCategories(data))
        fetchPosts(null, 1, 5).then(data => {
            post.setPosts(data.rows)
            post.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchPosts(post.selectedCategory.id, post.page, 5).then(data => {
            post.setPosts(data.rows)
            post.setTotalCount(data.count)
        })
    }, [post.page, post.selectedCategory])


    return <>
        <div className={classes.main}>
            <div className={classes.header}>
                <h1 style={{color:'white'}}>Публикации</h1>
            </div>
            <section className={classes.content}>
                <section className={classes.categoryRow}>
                  <CategoryRow />
                </section>
                <div className={classes.menu}>
                  <PostList/>
                </div>
            </section>

            <Pages/>
        </div>
    </>

});

export default UsefulPage;