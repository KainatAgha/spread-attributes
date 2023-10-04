import logo from './logo.svg';
import './App.css';
import Field from './Field';

function App() {

  const cs = {
    department: 'Computer science',
    name: 'John Doe',
    reg: '304512',
    project: 'School Management System'
    };
  
    const ee = {
      department: 'Electrical Engineering',
      name: 'Julie Mayr',
      reg: '564014',
      project: 'Solar Wireless System'
    };

  return (
    <div className="App">
      <h1>Students List</h1>
      <Field {...cs}/>
      <Field {...ee}/>
    </div>
  );
}

export default App;
