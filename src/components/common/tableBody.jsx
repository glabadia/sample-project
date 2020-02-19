import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderContent = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column, textProperty) => {
    return item[textProperty] + column.path || column.key;
  };

  displayInfo = item => {
    console.log(item);
  };

  render() {
    const { data, columns, textProperty, valueProperty } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr
            key={item[valueProperty] || item.key}
            // onClick={() => this.displayInfo(item)}
          >
            {columns.map(column => (
              <td key={this.createKey(item, column, textProperty)}>
                {this.renderContent(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;

TableBody.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};
