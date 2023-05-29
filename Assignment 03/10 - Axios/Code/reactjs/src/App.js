import React, { useEffect } from "react";
import axios from "axios";
import Header from "./component/Header";
import User from "./component/User";

const App = () => {

  const [data, setData] = React.useState([]);

  useEffect(async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
  }, []);

  return (
    <div id="wrapper" class="container">
      <Header />
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, index) =>
                <User user={value}/>
            )
          }
        </tbody>
      </table>
    </div>
  )
}



export default App;