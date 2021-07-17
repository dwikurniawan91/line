import Landing from 'screen/Landing';
import Bookmark from 'screen/Bookmark';

const routes = [
  { name: 'Bookmark', path: '/bookmark', exact: false, component: Bookmark },
  { name: 'Home', path: '/', exact: true, component: Landing },
];

export default routes;
