import React from "react";
import s from "./style.module.scss";
import {Preloader} from "../../../common/preloader/Preloader";

export function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <img className={s.img} src={props.profile.photos.large} alt=""/>
    </div>;
}