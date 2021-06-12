import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { TableContainer } from '../components/Table/TableStyles'
import Table from '../components/Table/Table'
import { useReqIndex } from '../hooks/useReqIndex'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import * as ROUTE from '../lib/routeConstant'


const ReqIndex: React.FC = () => {

    const { fetchedData, getReqIndex } = useReqIndex()

    // configure to change table header
    const theadData = ['', 'Request - Line', 'Description, Tags', '']
    const tbodyData = fetchedData

    useEffect(() => {

        getReqIndex()
        
    // eslint-disable-next-line
    }, [])
    

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
                />
            </TableContainer>
        </>
    )
}

export default ReqIndex
