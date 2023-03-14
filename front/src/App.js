
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

const BACKURL = "http://localhost:4000"

function App () {
  axios.get(`${BACKURL}/base`)
    .then(res => {
      console.log(res.data)
    })
  return (
    <div className="App">
      My setup app
    </div>
  )}
export default App;
