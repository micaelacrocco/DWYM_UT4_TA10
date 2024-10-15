import React, { Suspense } from "react";
import { useFetch } from "./hooks/useFetch";
import { fetchData } from "./fetchData";
import "./App.css";

// useFetch hook version
// function App() {
//   const { data, loading, error, handleCancelRequest } = useFetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   return (
//     <div className="App">
//       <h1>Fetch like a Pro</h1>

//       <button onClick={handleCancelRequest}>Cancel Request</button>
//       <ul className="card">
//         {error && <li>Error: {error}</li>}
//         {loading && <li>Loading...</li>}
//         {data?.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// --------------------------------------------
// Render as you fetch version
const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function App() {
  const data = apiData.read();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.name}-{item.email}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
export default App;