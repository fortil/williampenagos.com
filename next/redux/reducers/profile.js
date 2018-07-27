import initialState from './initialState'
import { profile as types } from '../types'

export default function profile (state = initialState().profile, action) {
  switch (action.type) {
    case types.CHECK_PROFILE_STATUS_START:
      return {
        ...state,
        loading: true
      }
    case types.CHECK_PROFILE_STATUS_SUCCESS:
      return {
        ...state,
        profile: action.data,
        loading: false
      }
    case types.CHECK_PROFILE_STATUS_FAILURE:
      return {
        ...state,
        error: action.data,
        loading: false
      }
    default:
      return state
  }
}