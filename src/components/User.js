import React from "react";
import Shimmer from "./Shimmer";


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    console.log("CDM");
    const data = await fetch(null);
    const json = await data.json();

    console.log(json);
    this.setState({
      userData: json,
    });
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  componentWillUnmount() {
    console.log("CWU");
  }

  render() {
    console.log("render");
    if (this.state.userData.length === 0) {
      return <Shimmer />;
    }

    return (
      <>
     
        <div className="flex flex-wrap justify-between">
          
            
        </div>
      </>
    );
  }
}

export default User;
