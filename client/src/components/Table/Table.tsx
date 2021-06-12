import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import ButtonIcon from '../ButtonIcon'
import { Table as StyledTable, TableRow } from './TableStyles'
import { useReqIndex } from '../../hooks/useReqIndex'


interface TableProps {
    theadData: Array<string | React.ReactNode>
    tbodyData: Data[]
}

type Data = {
    id: string
    reqLine: string
    description: string
}

const Table: React.FC<TableProps> = ({
    theadData,
    tbodyData
}) => {

    const { deleteReqIndex } = useReqIndex()

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
                                Object.entries(obj).map(([key, value]) => <td>{key !== 'id' && value}</td>)
                            }
                            <td>
                                <ButtonIcon onClick={() => deleteReqIndex(obj.id)}>
                                    <DeleteIcon/>
                                </ButtonIcon>
                            </td>
                        </TableRow>
                    )
                }
            </tbody>
        </StyledTable>
    )
}

export default Table
