import React from 'react';
import CategoryRow from "../../modules/CategoryRow/CategoryRow";
import {observer} from "mobx-react";

const UsefulPage = observer(() => {
    return (
        <div>
            <h1>USEFUL PAGE</h1>
            <CategoryRow/>
        </div>
    );
})

export default UsefulPage;