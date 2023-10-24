import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import sidebar_items from '../../assets/data/Sidebar_items.json'
import './Sidebar.scss'
import { Link } from 'react-router-dom'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const SiderbarCompoment = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)


    return (
        <div className='sidebar-admin'>
            <div className="sidebar__logo" >
                {/* <img src={logo} alt="company logo" /> */}
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default SiderbarCompoment
