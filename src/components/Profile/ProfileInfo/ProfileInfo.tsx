import React from "react";
import s from "./style.module.scss";
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {
            props.profile.photos.large
                ? <img className={s.img} src={props.profile.photos.large} alt=""/>
                : <img className={s.img} src={'http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png'}
                       alt=""/>
        }
        <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
    </div>
}