import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [jokes, setjokes] = useState([])

   useEffect(()=>{
    axios.get('http://localhost:3000/jokes')
        .then(function (response) {
          console.log(response.data);
          setjokes(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
   },[])
  return (
    <>
      <h1>First Full Stack project</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, id)=>{
        return <div>
        <hr/>
          <h3>{joke.title}</h3>
          <h4>{joke.description}</h4>
          <hr/>
        </div>
      })
      }
    </>
  )
}

export default App
