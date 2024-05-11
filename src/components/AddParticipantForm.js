import React, { useState } from 'react';
import axios from 'axios';

const AddParticipantForm = ({ onClose }) => {
    const [participant, setParticipant] = useState({
        gender: '',
        first_name: '',
        middle_name: '',
        last_name: ''
    });

    const handleChange = (e) => {
        setParticipant({
            ...participant,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/participants', participant)
            .then(() => {
                alert('Участник добавлен!');
                onClose();
            })
            .catch(error => {
                alert('Ошибка при добавлении участника!');
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2>Добавить участника</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Пол:
                    <input type="text" name="gender" value={participant.gender} onChange={handleChange} />
                </label>
                <label>
                    Фамилия:
                    <input type="text" name="last_name" value={participant.last_name} onChange={handleChange} />
                </label>
                <label>
                    Имя:
                    <input type="text" name="first_name" value={participant.first_name} onChange={handleChange} />
                </label>
                <label>
                    Отчество:
                    <input type="text" name="middle_name" value={participant.middle_name} onChange={handleChange} />
                </label>
                <button type="submit">Добавить</button>
                <button onClick={onClose}>Отмена</button>
            </form>
        </div>
    );
};

export default AddParticipantForm;
