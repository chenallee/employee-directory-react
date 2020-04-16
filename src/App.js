import React from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
// import Searchbar from "./components/Searchbar";
import employees from './employees.json';
import './App.css';

class App extends React.Component {
  state = {
    employees,
    searchTerm: '',
    searchSetting: 'searchBy', //this doesn't actually let us search by anything just shows placeholder
    sortSetting: 'sortBy', //this doesn't actually let us sort by anything just shows placeholder
    sortOrder: 'asc',
  };

  handleChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    //this should also call 
    this.renderEmployees();
  };

  returnEmployeeCard = (employee) => {
    return (
      <EmployeeCard
        key={employee.id}
        firstName={employee.firstName}
        lastName={employee.lastName}
        department={employee.department}
        role={employee.role}
        location={employee.location}
      />
    );
  }

  renderEmployees = () => {
    //sort employees

    //IF employee[this.state.searchSetting] -> return employees where employee[this.state.searchSetting] includes this.state.searchTerm
    //ELSE return employees where any attr includes this.state.searchTerm
    return this.state.employees.map((employee) => {

      if (employee[this.state.searchSetting]) {
        if (this.state.searchTerm === '' || employee[this.state.searchSetting].toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
          return this.returnEmployeeCard(employee);
        } else {
          return;
        }
      } else if (employee.firstName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || employee.lastName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || employee.location.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || employee.department.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return this.returnEmployeeCard(employee);
      } else {
        return; //has to return no matter what
      }
      //right now, if no searchSetting is specified or if the employee's property from searchSetting includes searchTerm, return employeeCard. 
      //we want it to be... if no searchSetting is specified return employeeCard that contains searchTerm in any of its properties // if searchSetting is specified return employeeCard that contains searchTerm in the specified property     
    }
    )
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Employees</h1>
        <form className=''>
          <div className="row">
            <div className="col-7">
              {/* filter */}
              <div className="form-group form-inline">
                <input type="text" name='searchTerm' placeholder="Search..." className='form-control' value={this.state.searchTerm} onChange={this.handleChange} />
                <div className="input-group-append" >
                  <select className='form-control' id='searchSetting' name='searchSetting' value={this.state.searchSetting} onChange={this.handleChange} >
                    <option value='searchBy'>Search by...</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="department">Department</option>
                    <option value="role">Role</option>
                    <option value="location">Location</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-5">
              {/* sort */}
              <div className="form-group form-inline">
                {/* <label for="sort">Sort: </label> */}
                <select id="sort" className='form-control' name='sortSetting' value={this.state.sortSetting} onChange={this.handleChange}>
                  <option disabled value='sortBy'>Sort by...</option>
                  <option value="firstName">First Name</option>
                  <option value="lastName">Last Name</option>
                  <option value="department">Department</option>
                  <option value="role">Role</option>
                  <option value="location">Location</option>
                </select>
                {/* sort by ascending or descending */}
                <div className="input-group-append">
                  <label className="btn btn-secondary">
                    <input type="radio" name="sortOrder" id="asc" value='asc' checked={this.state.sortOrder === 'asc'} onChange={this.handleChange} /> Asc</label>
                  <label className="btn btn-secondary">
                    <input type="radio" name="sortOrder" id="desc" value='desc' checked={this.state.sortOrder === 'desc'} onChange={this.handleChange} /> Desc</label>

                </div>
              </div>
            </div>
          </div>



        </form>

        {this.renderEmployees()}
      </Wrapper>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
