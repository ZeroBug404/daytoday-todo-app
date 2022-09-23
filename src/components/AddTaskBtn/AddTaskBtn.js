import React from 'react';
import './AddTaskBtn.css';
import { AiOutlinePlus } from 'react-icons/ai';
import TaskModal from './TaskModal';

const AddTaskBtn = () => {
    return (
        <div className='addTask'>
            <label htmlFor="addTaskModal" className="addTaskBtn"><AiOutlinePlus className='addTaskBtnIcon'/></label>
        </div>
    );
};

export default AddTaskBtn;