import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ParticipantsTable from './components/ParticipantsTable';
import AddParticipantForm from './components/AddParticipantForm';
import ProfilePage from './components/ProfilePage';

const App = () => {
    const [data, setData] = useState([]);
    const [activeTable, setActiveTable] = useState('participants');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        fetchData();
    }, [activeTable]);

    const fetchData = () => {
        const endpoint = activeTable === 'participants' ? 'participants' : 'activity';
        axios.get(`http://localhost:3001/${endpoint}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error fetching ${endpoint}:`, error));
    };

    const handleSelectTable = (table) => {
        setActiveTable(table);
        setShowAddForm(false);
    };

    const handleAddParticipant = () => {
        setShowAddForm(true);
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
        fetchData();
    };

    const handleDeleteParticipant = () => {
        fetchData();
    };

    return (
        <Router>
            <div className="App">
                <Sidebar onSelectTable={handleSelectTable} onAddParticipant={handleAddParticipant} />
                <div style={{ marginLeft: '250px' }}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                {activeTable === 'participants' ?
                                    <ParticipantsTable data={data} onDelete={handleDeleteParticipant} /> :
                                    <div>Activity table or other content goes here.</div>
                                }
                                {showAddForm && <AddParticipantForm onClose={handleCloseForm} />}
                            </>
                        } />
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
