import React, { useEffect, useState } from 'react';

const description = (
  <span style={{ textAlign: 'left', marginBottom: 20 }}>
    * <strong>REQUIREMENT</strong>: This assignment is about to enable user to apply one or more filters to user data.<br />
    * Show all keys in dropdown to apply filter <br />
    * If user click Add Filter, app will add another Filter Field <br />
    * If user click Apply Filter, app will filter user data based on defined Filters with 'OR' condition <br />
    * For example: user defined these filters:<br />
      - name: 'ohn'<br />
      - email: 'oe'<br />
      App will show user data that name contains 'ohn' OR email contains 'oe'<br />
  <br /><hr />
  </span>
);

const style = {
  wrapper: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 },
  row: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  result: { margin: '15px 0'}
}
const resolveWithDelay = (result, time = 1) => new Promise(resolve => setTimeout(() => resolve(result), time * 1000));
const rejectWithDelay = (msg) => new Promise((resolve, reject) => setTimeout(() => reject(msg), 1000));
const userData = '[{"name":"John Doe","email":"john.doe@mail.com","type":"basic","number":1,"address":"Jl blala"},{"name":"Johnny Deep","email":"j.deep@mail.com","type":"basic","number":3,"label":""},{"name":"Nick Morgan","email":"nickmorgan@mail.com","type":"vip","number":6},{"name":"Martin J","email":"martin.john@mail.com","type":"basic","number":2},{"name":"Martin Wel","email":"martinw@mail.com","type":"vip","number":8},{"name":"Johnny Christian","email":"j.christ@mail.com","type":"vip","number":4},{"name":"Julian","email":"j.jo@mail.com","type":"vip","number":2},{"name":"Jason McCartney","email":"McCartney@mail.com","type":"basic","number":9}]';

// Helper functions
const getUsers = async () => resolveWithDelay(JSON.parse(userData));
const saveData = async (singleUser) => resolveWithDelay(singleUser);
 const allKeys = JSON.parse(userData)?.reduce((keys, obj) => {
    return keys.concat(Object.keys(obj));
  }, []);
const uniqueKeys = Array.from(new Set(allKeys));
const AddedFilter = (setFilter) =>
{
  setFilter((filter)=>filter.concat({type:'',value:''}))
}
const UpdateFilterDropdown = (setFilter,filter,dropdownValue,indexFilter) =>
{
   setFilter(filter.map((val,index) => (indexFilter === index ? {...val,type:dropdownValue}:val)))
}
const UpdateFilterInputSearch = (setFilter,filter,inputValueValue,indexFilter) =>
{
  setFilter(filter.map((val,index) => (indexFilter === index ? {...val,value:inputValueValue}:val)))
}
// Helper functions

// components 
const FilterField = ({setFilter,filter,indexFilter,typeFilter}) =>
    <>
    <select onChange={(e)=>UpdateFilterDropdown(setFilter,filter,e.target.value,indexFilter)}>
      {uniqueKeys.map((options)=><><option value={options}>{options}</option></>)}
    </select>
    <input type="text" placeholder='value' onChange={(e)=>UpdateFilterInputSearch(setFilter,filter,e.target.value,indexFilter)}/>
    </>

const FilterSection = ({setFilter,filter}) => (
  <div style={style.wrapper}>
    {filter?.map((list, index)=><FilterField setFilter={setFilter} filter={filter} indexFilter={index} typeFilter={list.type}/>)}
    <button onClick={()=>AddedFilter(setFilter)}>Add Filter</button>
    <button>Apply Filter</button>
  </div>
)
const User = ({ user }) => (<p>{user.name} - {user.email} - {user.type}</p>)
// components 

const FilterComponent = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState([{
    type: 'name',
    value:''
  }])

  console.log('filter: ',filter)
  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  return (
    <>
      {description}

      <FilterSection setFilter={setFilter} filter={filter}/>
      <span style={style.result}>FILTER RESULT:</span>
      {users.map((user, index) => <User key={index} user={user} />)}
      <br />
      <button disabled={true}>Save</button>
    </>
  )
}

export default FilterComponent;
