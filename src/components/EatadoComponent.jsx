import { useUser } from "context/userContext";
import React from "react";

const EatadoComponent = ({ estadoList, children }) => {
  const { userData } = useUser();

  if (estadoList.includes(userData.estado)) {
    return children;
  }

  return <></>;
};

export default EatadoComponent;
