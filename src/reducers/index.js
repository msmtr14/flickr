import { combineReducers } from 'redux';
import groupData from './groups_reducer';
import galleryData from './groups_reducer';
import searchGroupText from './groups_reducer';
import addValue from './groups_reducer';

const rootReducer = combineReducers({
    groupData,
    galleryData,
    searchGroupText,
    addValue
});

export default rootReducer;