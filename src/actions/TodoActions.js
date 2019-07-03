import * as types from "../constants/actionTypes"

export function addTodo(text){
  return {
    type: types.ADD_TODO,
    text
  }
}

export function deleteTodo(id){
  return {
    type: types.DELETE_TODO,
    id
  }
}

export function editTodo(id, text){
  return {
    type: types.EDIT_TODO,
    text,
    id
  }
}

export function markTodo(id){
  return {
    type: types.ADD_TODO,
    id
  }
}

export function markAll(){
  return {
    type: types.MARK_ALL,
  }
}

export function clearMarked(){
  return {
    type: types.CLEAR_MARKED,
  }
}
