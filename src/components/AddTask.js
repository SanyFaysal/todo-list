import React from 'react';

const AddTask = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder='write task ' />
                <input type="submit" value='Add Task' />
            </form>
        </div>
    );
};

export default AddTask;