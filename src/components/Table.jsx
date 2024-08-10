import React from 'react';
import { typeOptions } from '../utilits/const';
import { deleteStoreColumn } from '../features/dashboardSlice';
import { useDispatch } from 'react-redux';

const Table = ({ tableHeader, tableData }) => {
    const dispatch = useDispatch()

    const deleteColumn = (name) => {
        dispatch(deleteStoreColumn(name))
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead className="table-primary">
                    <tr>
                        {tableHeader?.map((header, index) => (
                            <th key={index}>
                                <div className='d-flex justify-content-between align-items-center col w-100'>
                                    <span className='col-9'>{header.name}</span>
                                    <i className="bi bi-trash cursor-pointer" onClick={() => deleteColumn(header.name)}></i>
                                </div>
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {tableHeader?.map((header, index) => (
                            <th key={index}>
                                <select className="form-select form-select-sm" aria-label=""
                                    defaultValue={header.type}>
                                    {typeOptions.map((opt, index) => (
                                        <option key={index} value={opt.type}>{opt.value}</option>
                                    ))}
                                </select>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
