import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";

const CategoryRow = observer(() => {
    const {post} = useContext(Context)
    return <>
        <ListGroup>
            {post.categories.map(category =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={category.id === post.selectedCategory.id}
                    onClick={() => post.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    </>
});

export default CategoryRow;