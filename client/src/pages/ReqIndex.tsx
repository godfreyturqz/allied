import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { TableContainer } from '../components/Table/TableStyles'
import Table from '../components/Table/Table'
import { ApiRequest } from '../utils/ApiRequest'

// dev
import mockdata from '../lib/mockdata.json'


const ReqIndex: React.FC = () => {

    const [fetchedData, setFetchedData] = useState<object[]>([])

    const theadData = ['Request - Line', 'Description, Tags']
    const tbodyData = fetchedData

    useEffect(() => {

        const data = new ApiRequest('GET').reqIndex()

        mockdata.map(obj => setFetchedData(prev => [...prev, obj]))

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
