import React from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Searchbar from "./components/Searchbar";
// import logo from './logo.svg';
import employees from './employees.json';
import './App.css';

class App extends React.Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Employees</h1>
        <Searchbar />
        {this.state.employees.map((employee) => {
          return (
            <EmployeeCard
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              department={employee.department}
              role={employee.role}
              location={employee.location}
              // handleRemoveFriend={this.handleRemoveFriend}
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
