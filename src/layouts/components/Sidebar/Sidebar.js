import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    // const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested()
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));

        // userService
        //     .getFollowing()
        //     .then((data) => {
        //         setFollowingUsers(data);
        //     })
        //     .catch((error) => console.log(error));
    }, []);

    return (
        // <aside className={cx('wrapper')}>
        //     <Menu>
        // <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        // <MenuItem
        //     title="Following"
        //     to={config.routes.following}
        //     icon={<UserGroupIcon />}
        //     activeIcon={<UserGroupActiveIcon />}
        // />
        //         <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        //     </Menu>

        //     <SuggestedAccounts label="Suggested accounts" />
        //     <SuggestedAccounts label="Following accounts" />
        // </aside>

        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following accounts" data={suggestedUsers} />
        </aside>
    );
}

export default Sidebar;
