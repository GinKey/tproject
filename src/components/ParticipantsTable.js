import React from 'react';
import DataTable from 'react-data-table-component';

const columns = (handleDelete) => [
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
        cell: row => (
            <button onClick={() => handleDelete(row.id)}>
                Удалить
            </button>
        ),
    }
];

const ParticipantsTable = ({ data, onDelete }) => {
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

    return (
        <>
            <h2 style={{ marginLeft: "10px" }}>Участники</h2>
            <DataTable
                columns={columns(handleDelete)}
                data={data}
                defaultSortFieldId={1}
                pagination
            />
        </>
    );
};

export default ParticipantsTable;
