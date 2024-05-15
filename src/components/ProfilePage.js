import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = ({ onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [participant, setParticipant] = useState({
        gender: '',
        first_name: '',
        middle_name: '',
        last_name: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/participants/${id}`)
            .then(response => {
                setParticipant(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParticipant(prevParticipant => ({
            ...prevParticipant,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/participants/${id}`, participant)
            .then(() => {
                alert('Participant updated successfully');
                onUpdate(); // вызываем метод обновления таблицы
                navigate('/');
            })
            .catch(error => {
                alert('Error updating participant');
                console.error('Error:', error);
            });
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке данных участника: {error.message}</div>;
    }

    return (
        <div>
            <h1>Профиль участника</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Пол</label>
                    <input type="text" name="gender" value={participant.gender} onChange={handleChange} />
                </div>
                <div>
                    <label>Имя</label>
                    <input type="text" name="first_name" value={participant.first_name} onChange={handleChange} />
                </div>
                <div>
                    <label>Отчество</label>
                    <input type="text" name="middle_name" value={participant.middle_name} onChange={handleChange} />
                </div>
                <div>
                    <label>Фамилия</label>
                    <input type="text" name="last_name" value={participant.last_name} onChange={handleChange} />
                </div>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default ProfilePage;
