import {SHOW_DATA,INPUT_NAME,INPUT_STREET,INPUT_CITY} from './actiontypes'
export const showData=()=>{
    return{
        type:SHOW_DATA
    }
}
export const inputName=(e,data)=>{
    return{
        type:INPUT_NAME,
        text:data
    }
}
export const inputCity=(e,data)=>{
    return{
        type:INPUT_CITY,
        text:data
    }
}
export const inputStreet=(e,data)=>{
    return{
        type:INPUT_STREET,
        text:data
    }
}
