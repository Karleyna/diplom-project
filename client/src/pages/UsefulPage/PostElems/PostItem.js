import React from 'react';
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom"
import {POST_ROUTE} from "../../../utils/consts";
import {Card, Col} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchOnePost} from "../../../http/postAPI";


const PostItem = ({post}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3 mr-3"} onClick={() => navigate(POST_ROUTE + '/' + post.id)}>
            <Card style={{width: 170, cursor: 'pointer'}} border={"light"}>
                <Image width={170} height={170} src={process.env.REACT_APP_API_URL + '/' + post.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                </div>
                <div>{post.name}</div>
            </Card>
        </Col>
    );
};

export default PostItem;
