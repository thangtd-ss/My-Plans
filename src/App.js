import React from 'react';
import "./styles/index.css"
import Cloud from "./components/Cloud"
import Sun from "./components/Sun"
import NotePad from "./components/NotePad"
import Calendar from "./components/Calendar"
import NoteList from "./components/NoteList"
import Pencil from "./components/Pencil"
import BotFlower from "./components/BotFlower"
function App() {
  return (
    <div className="todo-list">
      <Cloud />
      <Sun />
      <div className="col md-12 wrapper-todo">
        <div className="row">
          <div className="col md-3">
            <NotePad />
          </div>
          <div className="col md-1">
            <div className="row">
            <Pencil />
            <Calendar />
            </div>
          </div>
          <div className="col md-4">
            <NoteList />
          </div>
          <div className="col md-2">
            <BotFlower />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
