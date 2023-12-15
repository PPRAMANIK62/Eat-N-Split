import { useState } from "react";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";
import { FormAddFriend } from "./FormAddFriend";

export function Sidebar({
  setFriends,
  setSelectedFriend,
  friends,
  selectedFriend,
}) {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="sidebar">
      <FriendsList
        friends={friends}
        selectedFriend={selectedFriend}
        onSelection={handleSelection}
      />

      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
}
