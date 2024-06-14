
import './App.css';
import { SideBar } from './components/SideBar';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {


  const [selectedFriend, setSelectedFriend] = useState(null);


  function handleSelect(id) {

    setSelectedFriend(id);

  }


  return (
    <div className="app">

      <SideBar itemsList={initialFriends} onSelectedFriend={handleSelect} selectedItem={selectedFriend} />

    </div>
  );
}

export default App;
