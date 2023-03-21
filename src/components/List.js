import React from "react";
import Title from "./Title";
function List() {
  const fields = [
    {
      id: 1,
      title: "Anil",
      description: "I Learn React",
    },
    {
      id: 2,
      title: "Bhaudik",
      description: "I learnt also javascript",
    },
  ];

  const fieldList = fields.map((field) => <Title key={field.id}field={field} />);

  return <div>{fieldList}</div>;
}

export default List;