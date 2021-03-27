import React from "react";
import s from "./style.module.scss";

export const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    console.log(pagesCount)
    for (let i = 1; i <= pagesCount; i++) {
        console.log(i)
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
                            <img className={s.img}
                                 src={!i.photos.small ? 'http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png' : i.photos.large}
                                 alt=""/>
                        </div>
                        <div>
                            {i.name}
                        </div>
                        <div>status: {i.status}</div>
                        <div>
                            {
                                i.followed
                                    ? <button onClick={() => {
                                        props.unFollow(i.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(i.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}