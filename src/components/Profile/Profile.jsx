import user from 'json/user';
import p from './Profile.module.css'
import { Description } from 'components/Profile/Description/Description'
import { Stats } from 'components/Profile/Stats/Stats'
export const Profile = () => {
    return <div className={p.profile}><Description username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar} /><Stats stats={user.stats} /></div>
}