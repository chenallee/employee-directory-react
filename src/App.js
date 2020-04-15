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
  };

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
                    <option disabled value='searchBy'>Search by...</option>
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
                {/* do we also want a asc/desc button? */}
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





        {this.state.employees.map((employee) => {
          //return if employee.searchSetting includes searchTerm or if searchTerm is blank
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
        )}
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
