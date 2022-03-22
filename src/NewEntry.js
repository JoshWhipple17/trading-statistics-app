import React from 'react'
import './NewEntry.css'

function NewEntry() {
    return (
        <div className="newEntry">
            <p className="newEntry__title">New Entry</p>
            <hr />
            <div className="newEntry__content">
                <div className="">
                    <p>Position:</p>
                    <select size="1" id="position">
                        <option value="short">Short</option>
                        <option value="long">Long</option>
                    </select>
                </div>
                <div className="">
                    <p>Entry:</p>
                    <input id="entry" />
                </div>
                <div className="">
                    <p>Exit:</p>
                    <input id="exit" />
                </div>
                <div className="">
                    <p># of Shares:</p>
                    <input id="shares" />
                </div>
            </div>
        </div>
    )
}

export default NewEntry
