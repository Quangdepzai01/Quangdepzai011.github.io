const initState = {
    num: 0,
}

export default (state=initState, action)=>{
    switch(action.type){
        case "UP": return {num: ++state.num}
        case "RESET_UP": return {num: 0}
        default: return state;
    }
}