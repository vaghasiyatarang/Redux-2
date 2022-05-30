const initialstate = {
    names: []
}

const savedata = (state = initialstate, action) => {

    switch (action.type) {

        case "submit":
            const {name,email} = action.payload;

            return {
                ...state,
                names: [...state.names, {
                    id:  new Date().getTime(),
                    name,
                    email
                }]
            }
                

        default: return state;
    }
}
export default savedata;



















// const initialstate ={ list:[] }

// const savedata = (state = initialstate, action) => {

//     switch (action.type) {

//         case "submit":
//             const { id, data } = action.payload;

//             return {
//                 ...state,list : [...state.list, { id: id, data: data }]
//             }
                

//         default: return state;
//     }
// }
// export default savedata;


