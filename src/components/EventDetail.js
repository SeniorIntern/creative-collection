import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function EventDetail() {
    /*
    const { id } = useParams()
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
                )
                setProduct(await response.json())
                setLoading(false)
            }
            getProduct()
        }, [])
    */

    return (
        <div className='eventDetail'>
            <div className='eventImages'>
                <div className='event__firstImage'></div>
                <div className='event__secondImage'></div>
                <div className='event__thirdImage'></div>
            </div>
            <div className='event__description'>
                <div className='event__firstDescription'></div>
                <div className='event__secondDescription'></div>
                <div className='event__ThirdDescription'></div>
            </div>
        </div>
    )
}
