import {SHOW_DATA,INPUT_CITY,INPUT_NAME,INPUT_STREET} from './actiontypes'

const initialState={
    name:'',
    flag:false,
    address:{
        City:'',
        Street:''
    }
}


const reducer=(state=initialState,action)=>{
    console.log(action)    
    switch(action.type)
        {
    
            case SHOW_DATA:
            return{
                ...state,
                flag:true
                }
            case INPUT_NAME:
                return{
                    ...state,
                    name:action.text
                }
            case INPUT_CITY:
            return{
                ...state,
                 address:{
                    ...state.address,
                   City:action.text
                 }
            }
            case INPUT_STREET:
                return{
                    ...state,
                     address:{
                        ...state.address, 
                       Street:action.text
                     }
                }
            default: 
                return state
        }
}

export default reducer