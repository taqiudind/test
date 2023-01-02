import "./App.css";
import { useState } from "react";

const App = () => {
  const [listApi, setListApi] = useState([]);

  const endpoint = process.env.REACT_APP_ENDPOINT;

  async function hitApi() {
    const api = await fetch(endpoint);
    const data = await api.json();
    return data.data;
  }

  const showApi = () => {
    hitApi().then((response) => {
      setListApi(response);
      console.log(response);
    });
  };

  return (
    <div className="App">
      <h1>TES API</h1>
      <div>
        {listApi.map((data) => {
          return (
            <div key={data.id}>
              <div>{data.email}</div>
              <div>{data.first_name}</div>
              <div>{data.last_name}</div>
            </div>
          );
        })}
      </div>
      <button onClick={() => showApi()}>GET API NOW!!</button>
    </div>
  );
};

export default App;
