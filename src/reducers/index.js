/**
 * Created by zengtao on 2017/3/6.
 */
import {combineReducers} from "redux"
import {List,fromJS} from "immutable";
import { menuList } from './menu'


export function mapstate(state) {
    return{
        menuList:state.menuList
    }
}

const rootReducer = combineReducers({
    menuList
})

export default rootReducer