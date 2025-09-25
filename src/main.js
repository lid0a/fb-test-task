import '~/normalize.css';
import '~/style.css';
import { h, watchEffect, mount, patch } from '~/lib/voy';
import { Switch } from '~/lib/router';
import { Sidebar } from '~/ui/shared/sidebar';
import { Header } from '~/ui/shared/header';
import { SignInPage } from '~/pages/signin';
import { HashRouter } from '~/lib/router';
import { router } from '~/router';
import { isAuthenticated } from '~/api/auth';

const unauthenticatedRoutes = [
  {
    path: '/signin',
    component: SignInPage,
  },
];

function App() {
  if (!isAuthenticated()) {
    router.redirect('/signin');
    return Switch({
      router: new HashRouter(unauthenticatedRoutes),
    });
  }

  return h('div', { className: 'app' }, [
    Sidebar(),
    Header(),
    h('main', { className: 'main' }, [Switch({ router })]),
  ]);
}

let lastView;

watchEffect(() => {
  const newView = App();
  if (!lastView) {
    mount(newView, document.body);
  } else {
    patch(lastView, newView);
  }
  lastView = newView;
});
