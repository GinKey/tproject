import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const columns = [
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
    }
];

const ParticipantsTable = ({ data }) => {
    return (
        <>
            <h2 style={{marginLeft: "10px"}}>Участники</h2>
            <DataTable
                columns={columns}
                data={data}
                defaultSortFieldId={1}
                pagination
            />
        </>
    );
};

export default ParticipantsTable;
