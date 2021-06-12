import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { TableContainer } from '../components/Table/TableStyles'
import Table from '../components/Table/Table'
import { useReqIndex } from '../hooks/useReqIndex'


const ReqIndex: React.FC = () => {

    const { fetchedData, getReqIndex } = useReqIndex()

    // configure to change table header
    const theadData = ['Request - Line', 'Description, Tags']
    const tbodyData = fetchedData

    useEffect(() => {

        getReqIndex()

    }, [])
    

    return (
        <>
            <Banner size='medium'>
                <p>Request Index</p>
            </Banner>
            <TableContainer>
                <Table 
                    theadData={theadData}
                    tbodyData={tbodyData}
                />
            </TableContainer>
        </>
    )
}

export default ReqIndex
