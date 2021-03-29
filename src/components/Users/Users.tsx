import React from "react";
import s from "./style.module.scss";
import {NavLink} from "react-router-dom";
import {followToUser, unFollowToUser} from "../../API/api";
import axios from "axios";
import {toggleFollowingProgress} from "../../Redux/users-reduser";

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
                            {i.followed
                                ? <button disabled={props.followingInProgress.some((id: number) => id === i.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, i.id);
                                              unFollowToUser(i.id).then(data => {
                                                  if (data.resultCode == 0) {
                                                      props.unfollow(i.id);
                                                  }
                                                  props.toggleFollowingProgress(false, i.id);
                                              });


                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id: number) => id === i.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, i.id);
                                              followToUser(i.id).then(data => {
                                                  if (data.resultCode == 0) {
                                                      props.follow(i.id);
                                                  }
                                                  props.toggleFollowingProgress(false, i.id);
                                              });


                                          }}>Follow</button>}
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}