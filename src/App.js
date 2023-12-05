import { useEffect, useState } from 'react';
import './App.css';
import {filterData, apiUrl} from './data'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  

const fetchData = async () => {
  setLoading(true);
  try{
    const response = await fetch(apiUrl);
    const output = await response.json();
    setCourses(output.data);
  }
  catch(error){
    toast.error("Something Went Wrong");

  }
  setLoading(false);
}
  useEffect(()=> {
   fetchData();
  },[]);
    return (
      <div className="App bg-slate-600 text-white">
          <Navbar/>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          <div>
            {
              loading ? <Spinner/> :  <Cards courses={courses} category = {category} />
            }
          </div>
      </div>
    );
}

export default App;
