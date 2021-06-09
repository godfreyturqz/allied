import React from 'react'
import { Table as StyledTable, TableRow } from './TableStyles'


interface TableProps {
    theadData: Array<string | React.ReactNode>
    tbodyData: Array<object>
}

const Table: React.FC<TableProps> = ({
    theadData,
    tbodyData
}) => {

    return (
        <StyledTable>
            <thead>
                <TableRow>
                    {
                        theadData && theadData.map(tableHead => <th>{tableHead}</th>)
                    }
                </TableRow>
            </thead>
            <tbody>
                {
                    tbodyData && tbodyData.map(obj => 
                        <TableRow>
                            {
                                Object.values(obj).map(tableData => <td>{tableData}</td>)
                            }
                        </TableRow>
                    )
                }
            </tbody>
        </StyledTable>
    )
}

export default Table
