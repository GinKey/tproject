import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import ActivityTable from './components/CustomDataTable';
import ParticipantsTable from './components/ParticipantsTable';
import AddParticipantForm from './components/AddParticipantForm';

const App = () => {
  const [data, setData] = useState([]);
  const [activeTable, setActiveTable] = useState('participants');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const endpoint = activeTable === 'participants' ? 'participants' : 'activity';
    axios.get(`http://localhost:3001/${endpoint}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => console.error(`Error fetching ${endpoint}:`, error));
  }, [activeTable]);

  const handleSelectTable = (table) => {
    setActiveTable(table);
    setShowAddForm(false);
  };

  const handleAddParticipant = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
      <div className="App">
        <Sidebar onSelectTable={handleSelectTable} onAddParticipant={handleAddParticipant} />
        <div style={{ marginLeft: '250px' }}>
          {activeTable === 'participants' ? <ParticipantsTable data={data} /> : <ActivityTable data={data} />}
          {showAddForm && <AddParticipantForm onClose={handleCloseForm} />}
        </div>
      </div>
  );
};

export default App;
