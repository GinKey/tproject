import React from 'react';
import DataTable from 'react-data-table-component';
import StatusIndicator from './StatusIndicator';
import Checkbox from './Checkbox';

// Определение столбцов для таблицы activity_log
const columns = [
    {
        name: 'Действие',
        selector: row => row.action,
        sortable: true,
    },
    {
        name: 'Коллекция',
        selector: row => row.collection,
        sortable: true,
    },
    {
        name: 'Пользователь',
        selector: row => row.user,
        sortable: true,
    },
    {
        name: 'Время Действия',
        selector: row => row.action_time,
        format: row => new Date(row.action_time).toLocaleString(),
        sortable: true,
    },
    // Вы можете добавить другие столбцы по необходимости
];

const ActivityTable = ({ data }) => (
    <>
        <h2 style={{marginLeft: "10px"}}>Лента Действий</h2>
        <DataTable
            columns={columns}
            data={data}
            defaultSortFieldId={1}
            pagination
        />
    </>
);

export default ActivityTable;
