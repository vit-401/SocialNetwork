import React from 'react'
import s from './Header.module.scss'
import {NavLink, useLocation} from 'react-router-dom'

import logoImg from '../../assets/images/logo.png'
import undefinedUserImg from '../../assets/images/header/question-mark-128.png'
import exit from '../../assets/images/header/exit-100.png'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../app/store';

type HeaderPropsType = {
   isAuth: boolean
   login: string | null
   logout: () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {

   //get current url, rerender too much!!!
   const HeaderView = () => {
      return useLocation().pathname.substring(1)
   }

   const smallProfileImg = useSelector<AppStateType, string | null | undefined>(state => state.profileState.profile?.photos.small)

   return (
       <div className={s.topBar}>
          <div className={s.logoWrapper}>
             <a className={s.logoLink} href="#">
                <img className={s.logoImg} src={logoImg} alt="logo"/>
                <h4 className={s.logoName}>SOCIAL LOGO</h4>
             </a>
          </div>
          <div className={s.topArea}>
             <div className={s.pageNameWrapper}>
                <span className={s.pageName}>
                   {HeaderView()}
                </span>
             </div>
             <div className={s.userImg}>
                {
                   props.isAuth
                       ? <>
                          <h5 className={s.isAuthState}>{props.login}</h5>
                          <img src={smallProfileImg ? smallProfileImg : undefinedUserImg} alt="userPhoto"/>
                       </>
                       : <NavLink to={'/login'} className={s.login}>LOGIN</NavLink>
                }
             </div>
             <span className={s.exitIconWrapper}>
                {
                   props.isAuth
                   && <a className={s.exit} href="#" onClick={props.logout}>
                      <img className={s.exitIcon} src={exit} alt="settings"/>
                   </a>
                }
             </span>
          </div>
       </div>
   )
}
