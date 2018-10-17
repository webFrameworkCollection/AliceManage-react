export function menuList (state = [], action) {
    switch (action.type) {
        case 'MENU_LIST':
            return action.data
        default:
            return state
    }
}