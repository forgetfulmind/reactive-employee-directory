import React, { Component} from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";
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
    // this.setState({ search: event.target.value });
    let viewArr = this.state.employees
    viewArr.filter(employee => employee.name.first === event.target.value);
    this.setState({results: viewArr})
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

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

  handleBtnClick = (event) => {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "name") {
      this.sortName()
    }

  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h3 className="text-center">Click on carrots to filter by heading or use the search box to narrow your results</h3>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          <SearchForm
            // handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
            // search={this.state.search}
          />
          {/* <SearchResults results={this.state.results} /> */}
        </Container>
        <Table data={this.state.results} handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Search;
