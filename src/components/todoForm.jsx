import React, { Component,useEffect,useMemo } from 'react';
import Pagination from './pagination';
import '../App.css';


const pageSize =2;
export let pageArrayData = '';
export let setCPData = '';

function AppTodo() {

  const [todos, setTodos] = React.useState([
    {id:1, text: "Learn about React" , isCompleted : false ,sublists:[{id:1, text: "create project" , isCompleted : false }]},
    {id:2, text: "Learn BestPractices", isCompleted : false ,sublists:[{id:1, text: "create project" , isCompleted : false }]},
    {id:3, text: "Build an to-do app", isCompleted : false ,sublists:[{id:1, text: "create project" , isCompleted : false }] },
    {id:4, text: "Builhi", isCompleted : false  ,sublists:[{id:1, text: "create project" , isCompleted : false }]},
    {id:5, text: "Builhasdasd", isCompleted : false ,sublists:[{id:1, text: "create project" , isCompleted : false }] },
  ]);

  const [value, setValue] = React.useState("")
  const [searchQuery, setSearch] = React.useState("")
  const [CurrentPage, setCP] = React.useState(1);
  setCPData = React.createContext(setCP)

  let taskstoShow = [...todos];

  // ! runs everytime a event is triggered
  // if(searchQuery) {
  //   let regex = new RegExp(`${searchQuery}+`,'i');
  //   let  i=0;
  //   while (i<1000000000) i++;
  //   // taskstoShow =todos.filter(e => e.text.toLowerCase().startsWith(searchQuery.toLowerCase()));
  //   taskstoShow =todos.filter(e => regex.test(e.text));
  // }

  const searchTasks =() => {
    if(searchQuery) {
      let regex = new RegExp(`${searchQuery}+`,'i');
      let  i=0;
      while (i<1000000000) i++;
      return todos.filter(e => regex.test(e.text));
    }
  }

  // ! only runs if searchQuery changes and does not effect other events trigger
  const isSearchRan = useMemo(() => searchTasks(),[searchQuery])
  taskstoShow = isSearchRan ? isSearchRan : taskstoShow

  const No_of_pages = Math.ceil(taskstoShow.length / pageSize);
  let pageArray = new Array(No_of_pages ).fill(null).map( (p,i) => i +1);
  pageArrayData = React.createContext(pageArray);

  const getPaginatedTasks = () =>{
    let lastIndex = CurrentPage * pageSize;
    let startIndex = lastIndex -pageSize
    return taskstoShow.slice(startIndex,lastIndex);
  }

  taskstoShow = getPaginatedTasks();

  const completeTodo = id => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      if(todo.id == id)
      todo.isCompleted = todo.isCompleted ? false : true;
    })
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos].filter(t => t.id != id)
    // newTodos.splice(id,1)
    setTodos(newTodos)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue("")
  }

  const addTodo = text => {
    const newTodos = [{text, isCompleted:false, id: Math.random(),subtasks:[{id:Math.random(),isCompleted:false,text:''}]}, ...todos]
    setTodos(newTodos)
  }

//   const onSearch = text => {
//     const newTodos = [...todos]
//     const newTodos1 = newTodos.filter(e => e.text.toLowerCase().startsWith(text.toLowerCase()))
//     setTodos(newTodos1)
//   }

  return (
    <div className="ml35">
      <h1 className="listProp">To-Do list</h1>
      <div className="app">
      <div className="input-group ">
        <input type="search"
              name="query"
              className="form-control my-3 col-3"
              placeholder="Search your tasks here...  "
              onChange = { e => setSearch(e.target.value)}
              />
      </div>
        <div className="todo-list">
          {taskstoShow.map((todo, index) => (
            <div className="todo" key ={index}
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.text}
              <div>
                <button className = "btn btn-success m-1" onClick = { () => completeTodo(todo.id)}>Complete</button>
                <button className = "btn btn-danger " onClick = { () => removeTodo(todo.id)}>Delete</button>
              </div>


              <div style={{marginLeft:"4%"}}>
                {todo.sublists.map((subtask , index1) => (
                  <div className="todo" key ={index1} style={{ textDecoration: subtask.isCompleted ? "line-through" : "" }} >
                    {subtask.text}
                    <div>
                      <button className = "btn btn-success m-1" onClick = { () => completeTodo(subtask.id)}>Complete</button>
                      <button className = "btn btn-danger " onClick = { () => removeTodo(subtask.id)}>Delete</button>
                    </div>
                </div>
                ))}
              </div>


            </div>
          ))}
          <form onSubmit = {handleSubmit}>
            <input
              type = "text"
              className = "input"
              value = {value}
              onChange = { e => setValue(e.target.value)}/>
          </form>
        </div>
      </div>
        <pageArrayData.Provider value={pageArray}>
          <setCPData.Provider value={setCP}>
            <Pagination CurrentPage={CurrentPage} />
          </setCPData.Provider>
        </pageArrayData.Provider>
    </div>

  );
}

export default AppTodo;

