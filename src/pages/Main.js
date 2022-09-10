import { Button } from '@mui/material'
import React, {useState} from 'react'
import {useNavigate, useHistory} from 'react-router-dom'
import {Logout, createDataInfirebase} from '../config/firebase'

const Page3 = () => {
    console.log('aaa')



    const [error, setError] = useState('')

    const navigate = useNavigate()

    

    const handleClick = async() =>{
        try{
            await Logout()
           navigate('/')
               }catch (error) {
                   console.log('error now')
                   setError('パスコードが間違っています')
               }
           }
    
    const  createFunc = async () => {
        console.log('start')
        const res = await createDataInfirebase()
        console.log('fin',res)
        
    }
    
    return(
        <div>
            <h1>Main</h1>
            <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            >
                ログアウト
            </Button>
            <Button
            onClick={createFunc}
            >
            DBへ保存
            </Button>
            <p>{error}</p>
        </div>
    )

}

export default Page3