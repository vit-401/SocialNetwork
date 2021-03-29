import React from "react";
import s from "./style.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div className={s.paginationWrapper}>
                {
                    pages.map(p => {
                        return <div
                            className={props.currentPage === p ? s.activePagination : s.pagination}
                            onClick={() => props.onPageChanged(p)}>{p}</div>
                    })
                }
            </div>

            <div>
                {props.users.map((i: any) => {
                    return <div key={i.id}>
                        <div>
                            <NavLink to={`/profile/${i.id}`}>
                                <img className={s.img}
                                     src={!i.photos.small ? 'http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png' : i.photos.large}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {i.name}
                        </div>
                        <div>status: {i.status}</div>
                        <div>
                            {
                                i.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
                                            }
                                        }).then(res => {
                                            debugger
                                            if (res.data.resultCode === 0) {
                                                props.unFollow(i.id)
                                            }
                                        })

                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${i.id}`, null, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
                                            }
                                        }).then(res => {
                                        debugger
                                            if (res.data.resultCode === 0) {
                                                props.follow(i.id)
                                            }
                                        })

                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}