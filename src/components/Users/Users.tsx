import React from "react";
import s from './style.module.scss'
import axios from "axios";

export class Users extends React.Component<any> {
    constructor(props: any) {
        super(props);

    }

    componentDidMount(): void {
        axios('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            debugger
            this.props.setUsers(res.data.items)
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        console.log(pagesCount)
        for (let i = 1; i <= pagesCount; i++) {
            console.log(i)
            pages.push(i)
        }

        return (
            <>
                {
                    pages.map(p => {
                        return <div
                            className={this.props.currentPage === p ? s.activePagination : s.pagination}>{p}</div>
                    })
                }
                <div>
                    {this.props.users.map((i: any) => {
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
                                            this.props.unFollow(i.id)
                                        }}>UnFollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(i.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                    })}
                </div>
            </>
        )
    }
}