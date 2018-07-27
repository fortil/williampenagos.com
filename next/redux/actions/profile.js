import axios from 'axios'
import { profile as types } from '../types'

const checkProfileStatusStart = () => ({
  type: types.CHECK_PROFILE_STATUS_START
})

const checkProfileStatusFailure = data => ({
  type: types.CHECK_PROFILE_STATUS_FAILURE,
  data
})

const checkProfileStatusSuccess = data => ({
  type: types.CHECK_PROFILE_STATUS_SUCCESS,
  data
})

export function getUser() {
  return async dispatch => {
    try {
      dispatch(checkProfileStatusStart())
      const { data } = await axios('https://api.github.com/users/fortil')
      console.log(data)
      dispatch(checkProfileStatusSuccess(data))
    } catch (err) {
      dispatch(checkProfileStatusFailure(err))
    }
  }
}

export function checkProfileStatuses() {
  return dispatch => {
    dispatch(checkProfileStatusStart())
  }
}

