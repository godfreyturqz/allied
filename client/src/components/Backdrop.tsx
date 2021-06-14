import React from 'react'
// import React, { useState, useEffect } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress';


interface BackdropIconProps {
    open: boolean
}

const BackdropIcon: React.FC<BackdropIconProps> = ({
    open
}) => {

    // const [show, setShow] = useState<boolean>(true)

    // useEffect(() => {

    //     let timeout = setTimeout(() => setShow(true), 100)

    //     return () => {
    //       clearTimeout(timeout)
    //     }

    // }, [])

    return (
        <>
            {/* { show &&
                <Backdrop open={open}>
                    <CircularProgress />
                </Backdrop>
            } */}
            <Backdrop open={open}>
                <CircularProgress />
            </Backdrop>
        </>
    )
}

export default BackdropIcon
