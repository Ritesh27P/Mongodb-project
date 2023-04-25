import { useState } from 'react';
import './App.css';
import QueryBtn from "./components/QueryBtn";
import Result from './components/Result';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  const findQuery = async (query)=> {
      try {
        const response = await axios.post(`/find/?${query}`, {query: query}, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        setData(response.data)

      } catch (err) {
          console.log(err)
      }
  }

  const list = [
    {query: "q1", btn_value: "Income lower than 5$ and 'BMW' or 'Mercedes' car"},
    {query: "q2", btn_value: "Phone price greater than 10,000"},
    {query: "q3", btn_value: "last name starts with M, quote length is greater than 15 and email includes the last name"},
    {query: "q4", btn_value: "Has car of brand 'BMW', 'Mercedes' or 'Audi' and email does not have digit init."},
    {query: "q5", btn_value: "Top 10 cities with highest number of users and their average income"}
  ]


  const buttons = list.map(element=> {
    return <QueryBtn findQuery={findQuery} query={element.query} btn_value={element.btn_value} />
  })

  return (
    <div className="App">
      <div className='row'>
          <div className='col-3'>
          {buttons}
          </div>
          {}

          <div className='col-9'>
          <Result data={data}/>
          </div>
      </div>

    </div>
  );
}

export default App;
