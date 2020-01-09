import { actionTypes } from './actions';

const getInitialState = () => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: '',
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_STORY_IDS_REQUEST:
    case actionTypes.FETCH_STORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_STORY_IDS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.FETCH_STORIES_SUCCESS:
      return {
        ...state,
        /// ... actually spreading the state dot stories
        // and the payload of stories within this array since it's an nestead value so this ensures 
        // that we are crating a new array instead of mutating the old one and then it will keep them 
        // in the order which we get them so it will add all the previous stories found first and then
        //  add the new stories when we have fetch story success
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default story;