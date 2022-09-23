import React, { useState, useEffect } from 'react';

const PageContent = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTasks(data))
    }, [])
    
    return (
        <div className='p-5 text-gray-700'>
            <h3 className='font-bold'>Hi Shakir!</h3>
            <div>
                <h3>All Tasks</h3>
                {
                    tasks?.map(task => {
                        return <h2>{task.title}</h2>
                    })
                }
            </div>
        </div>
    );
};

export default PageContent;