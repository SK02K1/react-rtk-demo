import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';

export const UsersListing = () => {
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {error && <p>{users.error.message}</p>}
      {isFetching && <p>Loading...</p>}
      {users &&
        users.map(({ id, name, email }) => {
          return (
            <div key={id}>
              <p>id: {id}</p>
              <p>name: {name}</p>
              <p>email: {email}</p>
            </div>
          );
        })}
    </div>
  );
};
