import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Ximen", age: "10" },
      { id: 2, name: "Nhut Tuong", age: "20" },
      { id: 3, name: "Lemon", age: "30" },
    ],
  };

  handleAddNewUser = (userObj) => {
    alert("Success");

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userid) => {
    alert("Success");

    const newList = this.state.listUsers.filter((item) => item.id !== userid);
    this.setState({
      listUsers: newList,
    });
  };

  //JSX
  render() {
    //DRY: Don't repeat yourself
    return (
      <>
        <div className="a">
          {/* cha sang con ko can () */}
          <AddUserInfor AddNewUser={this.handleAddNewUser} />
        </div>
        <div className="b">
          <DisplayInfor
            listUsers={this.state.listUsers}
            DeleteUser={this.handleDeleteUser}
          />
        </div>
      </>
    );
  }
}

export default MyComponent;
