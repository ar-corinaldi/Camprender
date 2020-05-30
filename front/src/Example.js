import React from "react";

function Example(props) {
  const users = ["Allan", "Diego", "isabela", "Sofia", "Garchi"];

  return (
    <div>
      {users.map((element) => (
        <div>{element}</div>
      ))}
    </div>
  );
}

export default Example;
