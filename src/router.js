import { HashRouter } from '~/lib/router';
import { HomePage } from '~/pages/home';
import { InfoPage } from '~/pages/info';
import { NotFoundPage } from '~/pages/not-found';
import { ProjectsPage } from '~/pages/projects/list';
import { AddProjectPage } from '~/pages/projects/add';
import { EditProjectPage } from '~/pages/projects/edit';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/projects/add',
    component: AddProjectPage,
  },
  {
    path: '/projects/:id',
    component: EditProjectPage,
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
