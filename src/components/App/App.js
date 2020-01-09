import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import List from 'components/List';

import { Wrapper, Title } from './styles';

class App extends Component {

 componentDidMount() {
    this.props.fetchStoriesFirstPage();
 }

  render() {
      const { stories } = this.props;
    return (
<ThemeProvider theme={colorsDark}>
  <div>
    <Wrapper>
      <Title>
       Hacker News Reader
      </Title>
       <List stories={stories} />
    </Wrapper>
  </div>
</ThemeProvider>
    );
  }
}

export default App;




// import { connect } from 'react-redux';
// import actions from 'store/story/actions';
// import { hasMoreStoriesSelector } from 'store/story/selectors';
// import App from './App';

// const mapStateToProps = state => ({
//   theme: state.app.theme,
//   stories: state.story.stories,
//   page: state.story.page,
//   storyIds: state.story.storyIds,
//   isFetching: state.story.isFetching,
//   hasMoreStores: hasMoreStoriesSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
//   fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);
