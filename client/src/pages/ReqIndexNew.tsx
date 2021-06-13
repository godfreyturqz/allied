import React from 'react'
import { useForm } from '../hooks/useForm'
import Input from '../components/Input'
import Banner from '../components/Banner'
import Button from '../components/Button'
import { FormContainer } from '../components/Form/FormStyles'
import { Link } from 'react-router-dom'
import * as ROUTE from '../lib/routeConstant'

const ReqIndexNew: React.FC = () => {

    const { formData, handleInputChange, handleFormSubmit } = useForm()

    return (
        <>
            <Banner size='medium'>
                <p>New Request Index</p>
            </Banner>
            <FormContainer>
                <form onSubmit={(e) => handleFormSubmit(e, formData)}>
                    <header>
                        New 
                    </header>
                    <div className='input-group'>
                        <Input
                            name='reqLine'
                            value={formData.reqLine}
                            handleInputChange={handleInputChange}
                            label='Request - Line'
                            placeholder="What's the Req-Line number?"
                        />
                        <br />
                        <Input
                            name='description'
                            value={formData.description}
                            handleInputChange={handleInputChange}
                            label='Description - Tags'
                            placeholder='Add details or tags'
                        />
                        <br />
                        <span>
                            <Button primary>
                                Add
                            </Button>

                        </span>
                        <span>
                            <Link to={ROUTE.REQ_INDEX}>
                                <Button primary>
                                    Back
                                </Button>
                            </Link>
                        </span>
                    </div>
                </form>
            </FormContainer>
        </>
    )
}

export default ReqIndexNew
