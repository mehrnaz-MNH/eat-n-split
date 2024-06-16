
import './App.css';
import { AddFriend } from './components/AddFriend';
import { BillForm } from './components/BillForm';
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
  const [isFFInvisible, setFFVisible] = useState(false);


  function handleSelect(id) {

    setSelectedFriend(id);

  }

  function handleBillFormSubmit(id, newBalance) {

    initialFriends.forEach(friend => {
      if (friend.id === id) {
        friend.balance = newBalance;
      }
    });

    setSelectedFriend(null);



  }

  function getFriendById(friends, id) {
    return friends.find(friend => friend.id === id);
  }


  return (
    <div className="app">

      <SideBar itemsList={initialFriends} onSelectedFriend={handleSelect} selectedItem={selectedFriend} />
      <BillForm friend={getFriendById(initialFriends, selectedFriend)} onSubmitForm={handleBillFormSubmit} />
      <button className="button" onClick={() => setFFVisible(!isFFInvisible)}>Add Friend</button>
      {isFFInvisible && <AddFriend />}



    </div>
  );
}

export default App;
