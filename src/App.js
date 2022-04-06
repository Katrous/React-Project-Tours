import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  // State Variables
  const [ loading, setLoading ] = useState(true)
  const [tours, setTours] = useState([])

  // Remove Function is here as the state it mutilates is in this file! We must simply pass it down as a prop to the singular tour it needs to remove (to grab id)
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }
  // fetch api request.
  const fetchTours = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // assigned the request response to state
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  
  // useEffect to call api request as soon as component loads.
  useEffect(() => {
    fetchTours();
  }, []);
  
  if (loading) {
    // Render state data
    return (<main>
      <Loading />
    </main>
    );
  } if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2> No Tours Left </h2>
        <button className="btn" onClick={() => fetchTours()}> Refresh</button>
      </div>
    </main>
  }  
  
  else {
    return (
      // Render state data

     <main><Tours tours={tours} removeTour={removeTour} /></main>
    //  Note! removeTour must be passed down muliple times, there is a way around this using an API.
    )
  }
}

export default App
