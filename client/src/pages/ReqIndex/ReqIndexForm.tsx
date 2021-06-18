import React, { ChangeEvent, FormEvent, MouseEvent } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FormContainer } from '../../components/Form/FormStyles'


interface ReqIndexNewProps {
    formData: ReqIndexForm
    setFormData: React.Dispatch<React.SetStateAction<ReqIndexForm>>
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleFormSubmit: (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>, formData: ReqIndexForm) => void
    page: string
    setPage: React.Dispatch<React.SetStateAction<string>>
}

interface ReqIndexForm {
    reqLine: string
    description: string
}

const ReqIndexNew: React.FC<ReqIndexNewProps> = ({
    formData,
    setFormData,
    handleInputChange,
    handleFormSubmit,
    setPage
}) => {

    const back = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setPage('reqIndexPage')
        setFormData({
            reqLine: '',
            description: ''
        })
    }


    return (
        <FormContainer>
            <form>
                <header>
                    New Request Index
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
                        <Button primary onClick={(e) => handleFormSubmit(e, formData)}>
                            Add
                        </Button>
                    </span>
                    <span>
                        <Button primary onClick={(e) => back(e)}>
                            Back
                        </Button>
                    </span>
                </div>
            </form>
        </FormContainer>
    )
}

export default ReqIndexNew
