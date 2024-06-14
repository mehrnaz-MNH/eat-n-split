import React from 'react';
import { FriendItem } from './FriendItem';

export const SideBar = ({ itemsList, onSelectedFriend, selectedItem }) => {
    return (
        <ul className="sidebar">
            {itemsList.map((item) =>

                <FriendItem props={item} onSelect={onSelectedFriend} selected={selectedItem} />

            )}

        </ul>
    )
}
