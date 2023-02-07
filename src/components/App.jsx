import friends from 'json/friends'
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "components/FriendList/Friend"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f3f3f3'
      }}
    ><Profile /><Statistics /><FriendList friends={friends} /></div>
    
    
  );
};
