import React from 'react'

export default function AddEvent() {
    return (
        <div className='addEvent'>
            <div className='add__images'>
                <input type='text' placeholder='Enter First Image URL' />
                <input
                    type='text'
                    placeholder='Enter Second Image URL (if any)'
                />
                <input
                    type='text'
                    placeholder='Enter Third Image URL (if any)'
                />
            </div>
            <div className='add__descriptions'>
                <input type='text' placeholder='' />
            </div>
        </div>
    )
}

/*
NOTE:
- set max words limit in url and description input field. 50 and 200 words respectively
*/
