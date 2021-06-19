import React, { useEffect } from 'react'
import Banner from '../../components/Banner'
import { TableContainer } from '../../components/Table/TableStyles'
import Table from '../../components/Table/Table'
import Button from '../../components/Button'
// COMPONENTS
import ReqIndexForm from './ReqIndexForm'
// FETCHING
import { useQuery } from 'react-query'
import { getReqIndex } from '../../services/ReqIndexService'
// STATE
import { useReqIndex } from './useReqIndex'


const ReqIndex: React.FC = () => {

    const {
        fetchedData,
        setFetchedData,
        removeReqIndex,
        page,
        setPage,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    } = useReqIndex()

    const { data } = useQuery('reqIndex', getReqIndex)

    // configure to change table header
    const theadData = ['', 'Request - Line', 'Description, Tags', '']
    const tbodyData = fetchedData

    
    useEffect(() => {
        
        setFetchedData(prev => [...prev, ...(typeof data === 'object' ? data : [])])

    }, [data, setFetchedData])


    return (
        <>
            <Banner size='medium'>
                <p>Request Index</p>
                <Button onClick={() => setPage('formPage')} secondary>
                    { 
                        page === 'reqIndexPage' ? 'Add' :
                        page === 'formPage' ? 'Back' : ''
                    }
                </Button>
            </Banner>
            {
                page === 'reqIndexPage' &&
                <TableContainer>
                    <Table 
                        theadData={theadData}
                        tbodyData={tbodyData}
                        removeReqIndex={removeReqIndex}
                    />
                </TableContainer>
            }

            {
                page === 'formPage' &&
                <ReqIndexForm
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    page={page}
                    setPage={setPage}
                />
            }
        </>
    )
}

export default ReqIndex
