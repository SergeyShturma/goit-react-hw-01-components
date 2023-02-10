import friends from 'json/friends'
import transactions from 'json/transactions'
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "components/FriendList/Friend"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory"
import s from "components/App.module.css"

export const App = () => {
  return (
    <div className={s.main}
      ><Profile /><Statistics />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
  </div>
  );
};
