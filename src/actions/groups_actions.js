import axios from 'axios';
import {
    GET_GROUPS,
    GET_SEARCH_TEXT
} from './types';

const GROUP_API = `https://api.flickr.com/services/rest/?method=flickr.groups.search&`;

export function getAllGroups(groupName, cardLimit, currentPageNum){
    
    const API_KEY = `1ba65cd8f95129823dc92869ffed3c8a`;
    const GROUP_TEXT = groupName ? groupName : 'new+york';
    const perPageGroups = cardLimit ? cardLimit : 100;
    const pageNum = currentPageNum ? currentPageNum : 1;

    const API_URL = `${GROUP_API}api_key=${API_KEY}&text=${GROUP_TEXT}&per_page=${perPageGroups}&page=${pageNum}&format=json&nojsoncallback=1`;

    const request = axios.get(`${API_URL}`)
                    .then(response => response.data.groups)
                    
    return {
        type: GET_GROUPS,
        payload: request
    }
}

export function searchGroupKeyword(data){
    return {
        type: GET_SEARCH_TEXT,
        payload: data
    }
}
