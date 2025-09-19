import { HashRouter } from '~/lib/router';
import { HomePage } from '~/pages/home';
import { InfoPage } from '~/pages/info';
import { NotFoundPage } from '~/pages/not-found';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/info',
    component: InfoPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export const router = new HashRouter(routes);
