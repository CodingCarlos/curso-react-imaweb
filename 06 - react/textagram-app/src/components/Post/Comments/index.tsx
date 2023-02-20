import React from "react";
import { IComentario } from "../../../interfaces";
import UserPicName from "../../UserPicName";

import './Comments.scss';

interface IComments {
    list: IComentario[];
    postComment?: Boolean;
}

function Comments(props: IComments) {
    function makeCommentsClassNames() {
        let className = 'comments';

        if (props.postComment) {
            className += ' miOtraClase';
        }

        return className;
    }

    return (
        // <div className="comments">
        <div className={makeCommentsClassNames()}>
            { props.list?.map((comentario, index) => (
                <div key={index}>
                    <UserPicName usuario={comentario.usuario} />
                    <div>{comentario.comentario}</div>
                </div>
            )) }
        </div>
    );
}

export default Comments;
