import "./App.css";
import { useState } from "react";

const App = () => {
  const endpoint = process.env.REACT_APP_ENDPOINT;

  const [listApi, setListApi] = useState([]);

  async function hitApi() {
    const api = await fetch(endpoint);
    const data = await api.json();
    setListApi(data.data);
  }

  const showApi = () => {
    console.log(listApi);
  };


  return (
    <div className="App">
      <h1>TES API</h1>
      <p></p>
      <button onClick={() => showApi()}>GET API NOW!!</button>
    </div>
  );
};

export default App;
