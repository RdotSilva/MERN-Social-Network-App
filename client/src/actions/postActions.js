import axios from 'axios';

import { ADD_POST, GET_ERRORS, GET_POSTS } from './types';

// Add Post
export const addPost = postData => dispatch => {
	axios
		.post('/api/posts', postData)
		.then(res =>
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Posts
export const getPosts = () => dispatch => {
	axios
		.post('/api/posts', postData)
		.then(res =>
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
