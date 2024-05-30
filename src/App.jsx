
import './App.css'
import Header from './Components/Header/Header'
import Cards from './Components/JobCard/Cards'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/SearchBar/Search'
// import JobData from './JobData'
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from './firebase.config'
import { useEffect, useState } from 'react'

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"))
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobsCriteria) => {
    if(jobs.length > 0){
      setCustomSearch(true);
    }else{
      setCustomSearch(false);
    }
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobsCriteria.type), where("title", "==", jobsCriteria.title), where("experience", "==", jobsCriteria.experience), where("location", "==", jobsCriteria.location), orderBy("postedOn", "desc"))
    const req = await getDocs(q);
    
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
    
  }

  useEffect(() => {
    fetchJobs()
  },[])
  

  return (
    <div>
      <Navbar />
      <Header />
      <Search fetchJobsCustom={fetchJobsCustom} />
      {customSearch &&
        <div className='w-full flex justify-end mb-3'><button onClick={fetchJobs} className="bg-blue-500 px-5 py-4 rounded-md text-white">Clear</button></div>
      }

      {
        jobs.map((job) => (
          <Cards key={job.id} {...job}/>
        ))
      }
    </div>
  )
}

export default App
