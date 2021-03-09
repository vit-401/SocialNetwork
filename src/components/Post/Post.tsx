import React from "react";
import s from './style.module.scss';

type PostPropsType = {
    post: string
    likesCount: string | number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div>
            <br/>
            <img className={s.img}
                 src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt=""/>
            <p className={s.message}>{props.post}</p>
            <div>likes: {props.likesCount}</div>
            <br/>
        </div>
    )
}