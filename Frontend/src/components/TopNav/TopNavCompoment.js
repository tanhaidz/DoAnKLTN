import React from 'react'
import './TopNav.scss'
import AdminAvatar from '../../assets/admin-avatar.png'
import Dropdown from '../dropdown/Dropdown'
import { Link } from 'react-router-dom'
import Pusher from 'pusher-js'
import { getNotifications } from '../../services/notificationService'

const user_menu = [
    {
        "icon": "bx bx-log-out-circle bx-rotate-180",
        "content": "Logout",
        "route": "/logout",
    }
]
const notifications = [
    {
        "icon": "bx bx-error",
        "content": "Curabitur id eros quis nunc suscipit blandit"
    },
    {
        "icon": "bx bx-package",
        "content": "Duis malesuada justo eu sapien elementum, in semper diam posuere"
    },
    {
        "icon": "bx bx-cart",
        "content": "Donec at nisi sit amet tortor commodo porttitor pretium a erat"
    },
    {
        "icon": "bx bx-error",
        "content": "In gravida mauris et nisi"
    },
    {
        "icon": "bx bx-cart",
        "content": "Curabitur id eros quis nunc suscipit blandit"
    }
]
class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: notifications,
        }

    }
    async componentDidMount() {
        let response = await getNotifications()
        if (response.errCode === 0) {
            this.setState({ notifications: response.data })
        }
        var pusher = new Pusher('8122cba0e2a96248542d', {
            cluster: 'ap1'
        });
        const channel = pusher.subscribe('order');
        channel.bind('notify', data => {
            this.setState({ notifications: [...this.state.notifications, data], });
        });
    }
    renderUserToggle = (adminInfo) => (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={AdminAvatar} alt="" />
            </div>
            <div className="topnav__right-user__name">
                {adminInfo}
            </div>
        </div>
    )
    renderUserMenu = (item, index) => (
        <Link to='/' key={index} onClick={() => this.handleLogout()}>

            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>

    )
    handleLogout = async () => {
        await this.props.signout()

    }
    renderNotificationItem = (item, index) => (
        <div className="notification-item" key={index} onClick={() => this.handleClickNotify(item)}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
            {item.isRead === false && <i className="bx bxs-circle" style={{ marginLeft: 2, paddingLeft: '20px', color: 'green', fontSize: 'small' }} />}

        </div>
    )
    handleClickNotify = (item) => {
        console.log(item)
        console.log(this.state.notifications)
        const updatedList = this.state.notifications.map((notification) => {
            if (notification.id === item.id) {
                return { ...notification, isRead: true };
            }
            return notification;
        });
        this.setState({
            notifications: updatedList
        })


    }
    render() {
        let { adminInfo } = this.props
        let { notifications } = this.state
        let count = 0;
        console.log(notifications)
        if (notifications && notifications.length > 0) {
            notifications.map(item => {
                if (item.isRead === false) {
                    count++;
                }
            })
        }
        return (

            <div className="topnav">
                <div className="topnav__search">
                    {/* <input type="text" placeholder="Search here..." ></input>
                    <i className='bx bx-search'></i> */}
                </div>
                <div className="topnav__right">
                    <div className="topnav__right-item">
                        <Dropdown
                            customToggle={() => this.renderUserToggle(adminInfo)}
                            contentData={user_menu}
                            renderItems={(item, index) => this.renderUserMenu(item, index)}

                        />
                    </div>
                    <div className="topnav__right-item">
                        <Dropdown
                            icon='bx bx-bell'
                            badge={count}
                            contentData={notifications}
                            renderItems={(item, index) => this.renderNotificationItem(item, index)}

                        />
                    </div>
                </div>
            </div>

        )
    }


}
export default TopNav