import React, { Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table"

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of employees
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({employees: res.data.results}))
      .then(res => this.setState({results: this.state.employees}))
      .catch(err => console.log(err));
  }

  handleInputChange = (event) => {
    let viewArr = this.state.employees
    let filterArr = viewArr.filter(employee => 
      employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase())> -1);

    this.setState({results: filterArr})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submit")
  };

  sortName(){
    let viewArr = this.state.employees
    viewArr.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  this.setState({results: viewArr})
  }

  sortPhone(){
    let viewArr = this.state.employees
    viewArr.sort((a, b) => {
      return a.phone - b.phone
  });
  this.setState({results: viewArr})
  }

  sortEmail(){
    let viewArr = this.state.employees
    viewArr.sort((a, b) => {
      let fa = a.email.toLowerCase(),
          fb = b.email.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  this.setState({results: viewArr})
  }

  sortDob(){
    console.log("sort age")
    let viewArr = this.state.employees
    viewArr.sort((a, b) => {
      return a.dob.age - b.dob.age
  });
  this.setState({results: viewArr})
  }


  handleBtnClick = (event) => {
    const btnName = event.target.getAttribute("data-value");
    // if (btnName === "name") {
    //   this.sortName()
    // }
    switch (btnName) {
      case "name":
        this.sortName()
          break;
      case "phone":
        this.sortPhone()
          break;
      case "email":
        this.sortEmail()
          break;  
      case "dob":
        this.sortDob()
          break;           
        default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </Container>
        <Table data={this.state.results} handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Search;
