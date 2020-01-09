import { connect } from 'react-redux';
import actions from 'store/story/actions';
// import { hasMoreStoriesSelector } from 'store/story/selectors';
import App from './App';

const mapStateToProps = state => ({
  theme: state.app.theme,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  // hasMoreStores: hasMoreStoriesSelector(state),
});

/* mapDispatchToProps */
// special function in that it will be used to trigger new actions inside of our components 
// so it's a way for our components to talk to the redux store 

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
  // fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
