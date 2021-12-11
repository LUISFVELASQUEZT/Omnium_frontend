import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
  console.log("Hello ", userData.nombre, " your role is ", userData.rol, " your id: /" , userData.identificacion, " and your email is ", userData.correo);
  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;
