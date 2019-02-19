import React from 'react';

const UserOption = props => {
  const { first_name, id } = props;

  return <option value={id}>{first_name}</option>;
};

export default UserOption;
