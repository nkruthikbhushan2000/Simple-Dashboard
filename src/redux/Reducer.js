import {
    UPDATE_DASHBOARD,
    UPDATE_ORDER_LIST,
    UPDATE_PROGRESS,
    UPDATE_NOTI_SIDEBAR_DATA,
    TOGGLE_NOTI_BAR,
    TOGGLE_MENU_BAR
} from './Actions';

const initialState = {
    Dashboard:{
        data:{},
        inProress:false,
    },
    OrderList:{
        data:[],
        inProress:false,
    },
    NotiSidebar: {
        data: {},
        inProress: false,
        isOpen: true,
    },
    MenuBar: {
        isOpen: true
    }
}

const AppReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_DASHBOARD:
            return {
                ...state,
                Dashboard: {
                    ...state['Dashboard'],
                    data: action.payload
                }
            }
        case UPDATE_ORDER_LIST:
            return {
                ...state,
                OrderList: {
                    ...state['OrderList'],
                    data: action.payload
                }
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                [action.payload.instance]:{
                    ...state[action.payload.instance],
                    inProress: action.payload.status
                }
            }  
        case UPDATE_NOTI_SIDEBAR_DATA:
            return {
                ...state,
                NotiSidebar: {
                    data:action.payload
                }
            } 
        case TOGGLE_NOTI_BAR:
            return {
                ...state,
                NotiSidebar: {
                    ...state['NotiSidebar'],
                    isOpen: action.payload ?? !state.NotiSidebar.isOpen
                }
            }   
        case TOGGLE_MENU_BAR:
            return {
                ...state,
                MenuBar: {
                    isOpen: action.payload ?? !state.MenuBar.isOpen
                }
            }  
        default:
            return {...state}
    }
}

export default AppReducer;