import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import { TableContainer } from '../components/Table/TableStyles'
import Table from '../components/Table/Table'
import Button from '../components/Button'
// ROUTING
import { Link } from 'react-router-dom'
import * as ROUTE from '../lib/routeConstant'
// FETCHING
import { useQuery } from 'react-query'
import { getReqIndex } from '../services/ReqIndexService'
// STATE
import { useReqIndex } from '../hooks/useReqIndex'


type Data = {
    id: string
    reqLine: string
    description: string
}

const ReqIndex: React.FC = () => {

    // const [fetchedData, setFetchedData] = useState<Data[]>([])
    const { fetchedData, setFetchedData, deleteReqIndex } = useReqIndex()
    const { data } = useQuery('reqIndex', getReqIndex)

    // configure to change table header
    const theadData = ['', 'Request - Line', 'Description, Tags', '']
    const tbodyData = fetchedData

    // const deleteReqIndex = (id: string) => {

    //     const filteredData = fetchedData.filter(value => value.id !== id)
    //     setFetchedData(() => [...filteredData])

    // }
    

    useEffect(() => {
        
        setFetchedData(prev => [...prev, ...(typeof data === 'object' ? data : [])])

    }, [data])
    

    return (
        <>
            <Banner size='medium'>
                <p>Request Index</p>
                <Link to={ROUTE.REQ_INDEX_NEW}>
                    <Button secondary>
                        Add
                    </Button>
                </Link>
            </Banner>
            <TableContainer>
                <Table 
                    theadData={theadData}
                    tbodyData={tbodyData}
                    deleteReqIndex={deleteReqIndex}
                />
            </TableContainer>
        </>
    )
}

export default ReqIndex
