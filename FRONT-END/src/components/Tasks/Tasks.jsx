import React from "react";
import { UncontrolledTooltip } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button, Checkbox } from "components";

class Task extends React.Component {
  render() {
    var tasksList = [];
    var number;
    var edit;
    var remove;
    for (var i = 0; i < this.props.tasks.length; i++) {
      number = "checkbox" + i;
      edit = "edit" + i;
      remove = "remove" + i;
      tasksList.push(
        <tr key={i}>
          <td className="text-left">{this.props.tasks[i].text}</td>
          <td className="td-actions text-right">
            <Button id={remove} round icon iconMini neutral color="danger">
              <i className="now-ui-icons ui-1_simple-remove" />
            </Button>
            <UncontrolledTooltip placement="top" target={remove} delay={0}>
              Remove
            </UncontrolledTooltip>
          </td>
        </tr>
      );
    }
    return (
      <div className="table-full-width table-responsive">
        <table className="table">
          <tbody>{tasksList}</tbody>
        </table>
      </div>
    );
  }
}

Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Task;
