import { combineReducers } from 'redux';

import news from './news';
import videos from './videos';
import articles from './articles';
import gallery from './gallery';

export default combineReducers({
  news,
  videos,
  articles,
  gallery
});
