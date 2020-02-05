
import Axios from "axios";
import {PROFILE_FAILED,PROFILE_INPROGRESS,PROFILE_SUCCESS,POST_FAILED,POST_INPROGRESS,POST_SUCCESS} from "./Types";


const onRequest = () => ({
    type: PROFILE_INPROGRESS
});

const onSuccess = (data) => ({
    type: PROFILE_SUCCESS,
    payload: data
});

const onFailed = () => ({
    type: PROFILE_FAILED
});


export const getProfileData = () => dispatch => {
    console.log("types",PROFILE_FAILED)

    dispatch(onRequest());
    try {
        const res = Axios.get(`https://jsonplaceholder.typicode.com/todos/`);
        res.then((res) => {
            console.log(res);
            dispatch(onSuccess(res.data))
        }).catch((error) => {
            console.log(error);
            dispatch(onFailed())
        })
    } catch (error) {
        console.log(error.response);
        dispatch(onFailed())
    }
} 


// POST ACTION 


const onRequestPost = () => ({
    type: POST_INPROGRESS
});

const onSuccessPost = (data) => ({
    type: POST_SUCCESS,
    payload: data
});

const onFailedPost = () => ({
    type: POST_FAILED
});


export const postProfileData = () => dispatch => {
    console.log("action is calling")

    dispatch(onRequestPost());
    // try {
    //     const res = Axios.get(`https://jsonplaceholder.typicode.com/todos/`);
    //     res.then((res) => {
    //         console.log(res);
    //         dispatch(onSuccess(res.data))
    //     }).catch((error) => {
    //         console.log(error);
    //         dispatch(onFailed())
    //     })
    // } catch (error) {
    //     console.log(error.response);
    //     dispatch(onFailed())
    // }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))

} 