import React from "react";
import s from './style.module.scss'

export const Users = (props: any) => {

if (props.users.length === 0) {
    props.setUsers([
        {
            id: 4,
            followed: true,
            fullName: 'Anna',
            status: 'I am little',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'Moldova', country: 'Ukrainian'}
        },
        {
            id: 5,
            followed: false,
            fullName: 'Kriss',
            status: 'I am not ',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'USA', country: 'Russia'}
        },
        {
            id: 6,
            followed: true,
            fullName: 'Simon',
            status: 'I am',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'Afrika', country: 'Belarus'}
        },
    ])
}
return (
    <>
        <div>
            {props.users.map((i: { id: number, photo: string, fullName: string, status: string, followed: boolean }, index: number) => {
                return <div key={i.id}>
                    <div>
                        <img className={s.img} src={i.photo} alt=""/>
                    </div>
                    <div>
                        {i.fullName}
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