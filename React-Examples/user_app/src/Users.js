import React from "react";

const Users = props => {
  const { users,deleteUser } = props;
  const userList = users.map(user => {
    return (
      <div className="user" key={user.id}>
        <div>Name:{user.name}</div>
        <div>Age:{user.age}</div>
        {/* <div>id:{user.id}</div>  */}
        <button onClick={()=>deleteUser(user.id)}>Delete User</button>
      </div>
    );
  });
  return <div className="user-list">{userList}</div>;
};

export default Users;
