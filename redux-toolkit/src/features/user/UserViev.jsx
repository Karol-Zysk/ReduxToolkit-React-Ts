import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchUsers } from "./userSlice";

const UserViev = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const data = useSelector((state) => state.user.users);
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
