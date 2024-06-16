import React from 'react'
import { useState } from 'react';

export const AddFriend = ({ onAddFriend }) => {

    const [isFFInvisible, setFFVisible] = useState(false);
    const [nameF, setName] = useState('');
    const [url, setUrl] = useState('');


    function onSubmitf(event) {


        event.preventDefault();

        const newItem = { id: Date.now(), name: nameF, image: url, balance: 0 }
        onAddFriend(newItem);
        setFFVisible(!isFFInvisible);

        setName("");
        setUrl("");


    }


    return (
        <div>
            <button className="button" onClick={() => setFFVisible(!isFFInvisible)}>Add Friend</button>
            {isFFInvisible &&
                <>
                    <form className='form-add-friend' onSubmit={onSubmitf}>
                        <label>🧑 Name</label>
                        <input type="text" value={nameF} onChange={(e) => setName(e.target.value)} />
                        <label>📷 Avatar</label>
                        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <button type='submit' className="button" >Add</button>
                    </form>
                </>

            }
        </div>
    )
}
