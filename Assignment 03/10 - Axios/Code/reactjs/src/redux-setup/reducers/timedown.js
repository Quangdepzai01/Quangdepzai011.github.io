const initState = {
    num: 10,
}

export default (state=initState, action)=>{
    switch(action.type){
        case "DOWN": return {num: --state.num}
        case "RESET_DOWN": return {num: 0}
        default: return state;
    }
}