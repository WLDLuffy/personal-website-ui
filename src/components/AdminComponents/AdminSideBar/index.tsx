import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CVPhoto from '../../../assets/CV Photo.png';

interface IAdminSideBarProps {

}


interface INavItemProps {
    title?: string;
    route?: string;
    icon?: any;
    subRoute?: any;
}

const NAV_LIST = [
    {
        title: 'Home',
        route: '/admin/home',
        subRoute: []
    },
    {
        title: 'Blog Post',
        route: '/admin/blog',
        subRoute: []
    },
    {
        title: 'Resume',
        route: '/admin/resume',
        subRoute: []
    },
]

const PathNavLink = (props: any) => (
    <NavLink exact={false} isActive={(_, { pathname }) => {
        return pathname.slice(0, props.to.indexOf('?')) === props.to.slice(0, props.to.indexOf('?'));
    }} {...props}>

    </NavLink>
)

const NavItem: FC<INavItemProps> = ({ title, route, icon, subRoute }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (subRoute.length !== 0) {
        return (
            <div className="d-flex flex-column overflow-auto" >
                <div className="d-flex flex-row mb-4 mt-2 cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
                    <img className="ml-8 mr-4" src={icon} alt={""} />
                    <div>{title}</div>

                </div>
                {isOpen && subRoute.map((subroute: any, index: number) => {
                    return <div className="bg-black" key={index}>
                        <PathNavLink to={subroute.route} activeStyle={{ color: 'white' }} >
                            <div className="d-flex flex-row m-3">
                                <div className="ml-8 mr-4">{subroute.title}</div>
                            </div>
                        </PathNavLink>
                    </div>
                })}
            </div>
        )


    } else {
        return (
            <PathNavLink to={route} activeStyle={{ color: "#2f6fdc" }}>
                <div className="d-flex flex-row mb-2 mt-2" style={{ justifyContent: "left" }}>
                    <img className="" src={icon} alt={""} />
                    <div>{title}</div>
                </div>
            </PathNavLink>
        )
    }


}

const AdminSideBar: FC<IAdminSideBarProps> = ({ children }) => {
    return (
        <div className="d-flex flex-row" style={{ height: '100vh', width: '100%', overflow: 'auto' }}>

            <div className="d-flex flex-column" style={{ backgroundColor: '#2f6fdc', color: '#2f6fdc', height: '100%', minWidth: '16rem', maxHeight: '100%', }}>
                <Link to='/'>
                    <div className="mt-1">
                        <img src={CVPhoto} alt={''} style={{ width: '5rem', margin: '1rem', marginLeft: '1rem' }} />
                    </div>
                </Link>
                <div className="d-flex flex-column mt-5" style={{ backgroundColor: "white" }}>
                    {NAV_LIST.map((nav, index) => {
                        return (<NavItem title={nav.title} route={nav.route} subRoute={nav.subRoute} key={index} />)
                    })}
                </div>
            </div>
            {children}
        </div>

    )
}

export default AdminSideBar
