export const UPDATE_DASHBOARD = "UPDATE_DASHBOARD";
export const UPDATE_ORDER_LIST = "UPDATE_ORDER_LIST";
export const UPDATE_NOTI_SIDEBAR_DATA = "UPDATE_NOTI_SIDEBAR_DATA";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
export const TOGGLE_NOTI_BAR = "TOGGLE_NOTI_BAR";
export const TOGGLE_MENU_BAR = "TOGGLE_MENU_BAR";

export const loadDashboard = (data) => {
    return {
        type: UPDATE_DASHBOARD,
        payload: data,
    }
}

export const loadOrderList = (data) => {
    return {
        type: UPDATE_ORDER_LIST,
        payload: data,
    }
}

export const updateProgress = (data) => {
    return {
        type: UPDATE_PROGRESS,
        payload: data,
    }
}

export const updateNotificationSideBarData = (data) => {
    return {
        type: UPDATE_NOTI_SIDEBAR_DATA,
        payload: data,
    }
}

export const toggleNotiBar = (data = null) => {
    return {
        type: TOGGLE_NOTI_BAR,
        payload: data,
    }
}

export const toggleMenuBar = (data = null) => {
    return {
        type: TOGGLE_MENU_BAR,
        payload: data,
    }
}