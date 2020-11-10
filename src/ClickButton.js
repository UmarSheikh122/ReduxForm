import React from 'react'
import {showData,inputName,inputStreet,inputCity} from './Redux/action'
import {useHistory ,Link} from 'react-router-dom'

import {connect} from 'react-redux'
const ClickButton=(props)=> {
    // const history = useHistory()
    return (
        <form>
            <input  value={props.name} onChange={(e)=>props.inputName(e,e.target.value)} placeholder="Name"/><br/><br/>
            <input value={props.City} onChange={(e)=>props.inputCity(e,e.target.value)} placeholder="City"/><br/><br/>
            <input value={props.Street} onChange={(e)=>props.inputStreet(e,e.target.value)} placeholder="Street"/>
     
       <div>
           
        <Link onClick={props.showData}>Show Data</Link> 
        {/* <button onClick={()=>history.goBack()}>Next PAGE</button> */}
         <Link exact to="/Contact">Next Page</Link> 

        <>
        {props.flag && <div>{props.name}<br/><br/>{props.City}<br/><br/>{props.Street}</div>}
        </>
        </div>   
        </form>
           
    )
}

const mapStateToProps=(state)=>{
    return{
        name:state.name,
        flag:state.flag,
        City:state.address.City,
        Street:state.address.Street
        }
 }

const mapDispatchToProps=(dispatch)=>{
  return{
    showData:(e)=>{
        e.preventDefault()

        dispatch(showData())
  },
    inputName:(e,data)=>{
       // const nameAction={type:'INPUT_NAME',text:e.target.value}
        dispatch(inputName(e,data))
    },
    inputCity:(e,data)=>{
        //const cityAction={type:'INPUT_CITY',text:e.target.value}
        dispatch(inputCity(e,data))
    },
    inputStreet:(e,data)=>{
        //const streetAction={type:'INPUT_STREET',text:e.target.value}
        dispatch(inputStreet(e,data))
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ClickButton)


// inputChangedContact: (e) => {
//     const actionContact = { type: 'INPUT_CONTACT', text: e.target.value }
//     dispatch(actionContact);