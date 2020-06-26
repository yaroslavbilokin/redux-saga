import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}


export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            dispatch({
                type: FETCH_POSTS,
                payload: json
            });
            dispatch(hideLoader());
        } catch (e) {
            dispatch(showAlert('Smth went wrong!'));
            dispatch(hideLoader());
        }
    }
}

