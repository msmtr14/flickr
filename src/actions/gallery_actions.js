import axios from 'axios';
import {
    GET_GALLERY,
    ADD_VALUE
} from './types';

export function getAllGroupPoolPhoto(nsid, perPageLimit, nextPageNum){
    
    const API_KEY_GALLERY = `1ba65cd8f95129823dc92869ffed3c8a`;
    const GROUP_ID = `${nsid}`;
    const perPage = perPageLimit ? perPageLimit : 20;
    const pageNum = nextPageNum ? nextPageNum : 1;
    const extras = `description%2C+views`;

    const GALLERY_URL = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=${API_KEY_GALLERY}&group_id=${GROUP_ID}&per_page=${perPage}&page=${pageNum}&format=json&nojsoncallback=1&extras=${extras}`;


    const request = axios.get(`${GALLERY_URL}`)
                    .then(response => response.data)

                    return{
                        type: GET_GALLERY,
                        payload: request
                    }

}

// export function addValues(data){
//     return{
//         type: ADD_VALUE,
//         payload: data
//     }
// }