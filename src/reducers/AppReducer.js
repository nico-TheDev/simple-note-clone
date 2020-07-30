import globalTypes from "../GlobalTypes";

export default function AppReducer(state, action) {

    switch (action.type) {
        case globalTypes.toggleNav:
          console.log('navi')
            return { ...state, navbarOpen: !state.navbarOpen };
        case globalTypes.handleNotesChange:
            const stateCopy = {...state};
            stateCopy[action.noteType] = stateCopy[action.noteType].map(item => {
                if(item.id === action.id){
                    return {  ...item, body: action.text,title:action.text.slice(0,40)}
                }else{
                    return item;
                }
            })

            return stateCopy;
        default:
            return state;
    }
}
