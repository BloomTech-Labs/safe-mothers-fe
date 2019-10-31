import React from 'react';

const UserFilter = () => {
  return (
    <div>
      <form action=''>
      <label>Search For Admin   </label>
        <input
          type='text'
          placeholder='Filter Admins...'
          // onChange={onChange}
        />
      </form>

      <div>
        <h1>List Of Admins</h1>
      </div>
    </div>
  );
};

export default UserFilter;
