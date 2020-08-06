import ActionTypes from "../ActionTypes";

export default function UIReducer(state, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_NAV:
            return { ...state, isNavbarOpen: !state.isNavbarOpen };

        case ActionTypes.TOGGLE_INFO:
            return { ...state, isInfoBarOpen: !state.isInfoBarOpen };

        case ActionTypes.TOGGLE_SIDEBAR:
            return { ...state, isSidebarOpen: !state.isSidebarOpen };

        default:
            return state;
    }
}