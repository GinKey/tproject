import React from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import '../css/ParticipantsTable.css'; // Импорт файла CSS

const columns = (handleDelete, handleEdit) => [
    {
        name: 'Пол',
        selector: row => row.gender,
        sortable: true,
    },
    {
        name: 'Имя',
        selector: row => row.first_name,
        sortable: true,
    },
    {
        name: 'Отчество',
        selector: row => row.middle_name,
        sortable: true,
    },
    {
        name: 'Фамилия',
        selector: row => row.last_name,
        sortable: true,
    },
    {
        name: 'Действия',
        button: true,
        width: '220px',
        cell: row => (
            <div className="action-buttons">
                <button className="edit-button" onClick={() => handleEdit(row.id)}>Редактировать</button>
                <button className="delete-button" onClick={() => handleDelete(row.id)}>Удалить</button>
            </div>
        ),
    }
];

const ParticipantsTable = ({ data, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этого участника?')) {
            fetch(`http://localhost:3001/participants/${id}`, { method: 'DELETE' })
                .then(() => {
                    onDelete();
                    alert('Участник удален');
                })
                .catch(error => {
                    alert('Ошибка при удалении участника');
                    console.error('Error:', error);
                });
        }
    };

    const handleEdit = (id) => {
        navigate(`/profile/${id}`);
    };

    return (
        <>
            <h2 style={{ marginLeft: "10px" }}>Участники</h2>
            <DataTable
                columns={columns(handleDelete, handleEdit)}
                data={data}
                defaultSortFieldId={1}
                pagination
            />
        </>
    );
};

export default ParticipantsTable;
