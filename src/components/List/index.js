import React from 'react';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

const List = ({ stories }) => (
  <ListWrapper>
    {/* providing key to while mapping while make re-rendering much quicker */}
     {stories.map(story => <ListItem {...story} key={story.id} />)} 
  </ListWrapper>
);

export default List;