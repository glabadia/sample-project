import React from "react";
import BadgeCount from "./badgeCount";

const ListGroup = ({
  itemList,
  textProperty,
  valueProperty,
  getBadgeCount,
  onItemChange,
  selectedFilter
}) => {
  const listClassName =
    "list-group-item d-flex justify-content-between align-items-center text-capitalize font-weight-bold ";
  return (
    <ul className="list-group">
      {itemList.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedFilter ? listClassName + "active " : listClassName
          }
          onClick={() => onItemChange(item)}
        >
          {item[textProperty]}
          <BadgeCount count={getBadgeCount(item).length} />
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
