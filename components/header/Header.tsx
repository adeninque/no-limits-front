'use client'

import s from './page.module.scss'
import Image from 'next/image'
import joinClasses from "@/utils/joinClasses";
import Link from "next/link";
import useVisible from "@/hooks/useVisible";
import {useEffect, useState} from "react";

const Header = () => {
  const burger = useVisible()
  const menu = [
    { name: 'Главная', href: '/'},
    { name: 'Ивенты', href: '#'},
    { name: 'Места', href: 'places'},
    { name: 'Заявка', href: 'application'},
  ]

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__body}>
          <div className={s.header__logo} style={{backgroundImage: "url('icons/logo_transparent.svg')"}}></div>
          <nav className={joinClasses(s.header__nav, s.nav)}>
            {menu.map((item, index) => (
              <Link className={joinClasses(s.nav__item, 'btn')} href={item.href} key={index}>{item.name}</Link>
            ))}
          </nav>
          <div className={s.header__left}>
            <div className={s.header__user}></div>
            <div className={joinClasses(s.header__burger, s.burger)} onClick={burger.toggle}><span></span></div>
          </div>
        </div>
      </div>
      <nav className={joinClasses(s.header__offcanvas, s.offcanvas, burger.visible ? s.offcanvas__opened : '')}>
        {menu.map((item, index) => (
          <Link className={joinClasses(s.offcanvas__item, 'btn')} href={item.href} key={index}>{item.name}</Link>
        ))}
        <button className={s.offcanvas__btn} onClick={burger.toggle}>Закрыть</button>
      </nav>
    </header>
  )
};

export default Header;