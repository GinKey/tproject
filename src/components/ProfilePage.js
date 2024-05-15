import React from 'react';
import { useParams } from 'react-router-dom';



const ProfilePage = () => {
    const { id } = useParams();

    // Логика получения и редактирования данных профиля по ID

    return (
        <div>
            <h1>Профиль участника {id}</h1>
            {/* Форма для редактирования профиля */}
        </div>
    );
};

export default ProfilePage;
