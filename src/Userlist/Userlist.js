import React, { useEffect, useState } from 'react';
import './Userlist.css'
const Userlist = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    setUsers(await response.json());

  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {
        users.map((e) => {
          return (
            <div>
              <div className="card" key={e.id}>
                <h1>{e.id}</h1>
                <div className="card-body">
                  <h2 className="card-title">{e.name}</h2>
                  <h3 className="card-text">{e.username}</h3>
                  <h3>{e.email}</h3>
                  <h4>address:{e.address.street}{e.address.suite}</h4>
                  <p>{e.address.city}{e.address.zipcode}</p>
                  <p>{e.address.geo.lat}</p>
                 <p> {e.phone}</p>
                 <p> {e.website}</p>
                 <p> {e.company.name}</p>
                 <p> {e.company.catchPhrase}</p>
                 <p> {e.company.bs}</p>



                  
                </div>
              </div>
            </div>
          )
        })

      }
    </>
  )
}
export default Userlist;