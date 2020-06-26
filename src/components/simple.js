import React, { useEffect } from 'react'
import ParticularPost from '../containers/particularPost'
import {fetchParticularPost} from '../actions'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

const Simple = () => {

    let id = useParams().id
    //console.log(id)
    let dispatch = useDispatch()
    useEffect(()=>{

        dispatch(fetchParticularPost(id))

    },[dispatch,id]) 
    return (
        <ParticularPost />
    )   

}

export default Simple