const initialState = [
  {
    title: 'Philosophy',
    toggle: true,
  },
  {
    title: 'Music',
    toggle: true,
  },
  {
    title: 'Travelling',
    toggle: false,
  },
  {
    title: 'Sport',
    toggle: true,
  },
  {
    title: 'Soccer',
    toggle: false,
  },
  {
    title: `Rock'n'Roll`,
    toggle: false,
  },
  {
    title: `Swimming`,
    toggle: false,
  },
  {
    title: `Radiohead`,
    toggle: false,
  },
  {
    title: `Dog`,
    toggle: true,
  },
  {
    title: `Religion`,
    toggle: true,
  },
  {
    title: `Michael Jackson`,
    toggle: true,
  },
  {
    title: `France`,
    toggle: true,
  }
]

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default dataReducer