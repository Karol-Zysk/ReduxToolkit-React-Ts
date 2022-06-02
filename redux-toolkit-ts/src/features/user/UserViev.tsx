import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { fetchUsers } from "./userSlice";

const UserViev = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const data = useAppSelector((state) => state.user.users);
  console.log(data);

  return (
    <div>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <span>{`${user.id}. ${user.name} `}</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserViev;
