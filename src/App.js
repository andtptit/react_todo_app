import Todolist from "./Todolist";
import Textfield from '@atlaskit/textfield'
import Buttom from '@atlaskit/button'
import {v4} from 'uuid'
import { useCallback, useEffect, useState } from "react";
const TODO_APP_STORAGE_KEY = "TODO_APP";


function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] =  useState("");

  useEffect(() => {
    const stroagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (stroagedTodoList){
      setTodoList(JSON.parse(stroagedTodoList))
    }
  },[])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList])

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },[]);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([{id: v4(),name: textInput, isComplete: false},...todoList]);
      setTextInput("")
    },[textInput, todoList]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isComplete: true} : todo))
  })

  return (
    <div>
      <h3>Day la danh sach can lam</h3>
      <Textfield name="add-todo" placeholder="Them viec can lam..." elemAfterInput={
          <Buttom isDisabled={!textInput}
          appearance='primary' 
          onClick={onAddBtnClick}
          >
            Add
          </Buttom>
        }
        css={{ padding: '2px 4px 2px'}}
        value = {textInput}
        onChange = {onTextInputChange}
      ></Textfield>
      <Todolist todoList = {todoList} onCheckBtnClick = {onCheckBtnClick}/>
    </div>
  );
}

export default App;
