import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import history from '../history';
import { addTask } from '../actions';


const AddTask = (props) => {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !time) {
            return;
        }
        const newId = props.lastID + 1;
        const input = { name, time, id: newId, status: 'P' }
        dispatch(addTask(input));
        history.push('/');
    }


    return (
        <div className='ui container'>
            <form className="ui form" onSubmit={(e) => { onSubmit(e) }}>
                <div className="field">
                    <label>Task Name</label>
                    <input type="text" value={name} placeholder="Task Name" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Select Time</label>
                    <input type="time" value={time} onChange={(e) => { setTime(e.target.value) }} />
                </div>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    const lastID = state.Tasks.length !== 0 ? state.Tasks[state.Tasks.length - 1].id : 0;
    return { lastID }
}

export default connect(mapStateToProps)(AddTask);