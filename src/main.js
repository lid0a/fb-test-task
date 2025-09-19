import '~/normalize.css';
import '~/style.css';
import { h, watchEffect, mount, patch } from '~/lib/voy';
import { HashRouter, Switch } from '~/lib/router';
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

const router = new HashRouter(routes);

function App() {
  return h('div', null, [
    h('header', null, [
      h('nav', null, [
        h('a', { href: '#/' }, 'Home'),
        h('a', { href: '#/info' }, 'Info'),
      ]),
    ]),
    h('main', null, [Switch({ router })]),
  ]);
}

const root = document.querySelector('#app');

let lastView;

watchEffect(() => {
  const newView = App();
  if (!lastView) {
    mount(newView, root);
  } else {
    patch(lastView, newView);
  }
  lastView = newView;
});
