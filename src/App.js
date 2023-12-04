import { useEffect, useState } from 'react';
import './App.css';
import {filterData, apiUrl} from './data'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

function App() {
  const [courses, setCourses] = useState([]);

const fetchData = async () => {
  try{
    const response = await fetch(apiUrl);
    const output = await response.json();
    setCourses(output.data);
  }
  catch(error){

  }
}
  useEffect(()=> {
   fetchData();
  },[]);
    return (
      <div className="App">
          <Navbar/>
          <Filter filterData={filterData}/>
          <Cards courses={courses}/>
      </div>
    );
}

export default App;
