import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Shopping',
            day: 'Feb 5th at 2.30 pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Visit Doctor',
            day: 'Jan 31st at 2.30 pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Dental Checkup',
            day: 'Feb 5th at 2.30 pm',
            reminder: false,
        },
        {
            id: 4,
            text: 'Meeting with Tom',
            day: 'March 6th at 1.30 pm',
            reminder: true,
        },
    ]);
    return (
        <>
            <div className="container">
                <Header />
                <Tasks tasks={tasks} />
            </div>
        </>
    );
}

export default App;
