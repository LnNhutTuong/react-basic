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

    //bad code ewww
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    //good code yeahhh
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  //JSX
  render() {
    //DRY: Don't repeat yourself
    return (
      <>
        {" "}
        <div className="a">
          {/* cha sang con ko can () */}
          <AddUserInfor AddNewUser={this.handleAddNewUser} />
        </div>
        <div className="b">
          {" "}
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>
      </>
    );
  }
}

export default MyComponent;
