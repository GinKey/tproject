import React from 'react';
import DataTable from 'react-data-table-component';

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
