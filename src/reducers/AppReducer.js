import globalTypes from "../GlobalTypes";

export default function AppReducer(state, action) {

    switch (action.type) {
        case globalTypes.toggleNav:
          console.log('navi')
            return { ...state, navbarOpen: !state.navbarOpen };
        default:
            return state;
    }
}
