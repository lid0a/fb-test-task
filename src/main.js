import '~/normalize.css';
import '~/style.css';
import { h, watchEffect, mount, patch } from '~/lib/voy';
import { Switch } from '~/lib/router';
import { Sidebar } from '~/ui/shared/sidebar';
import { authenticatedRouter } from '~/router';
import { Header } from '~/ui/shared/header';

function App() {
  // if (!localStorage.getItem('session_id')) {
  //   authenticatedRouter.redirect('/signin');
  //   return Switch({
  //     router: unauthenticatedRouter,
  //   });
  // }

  return h('div', { className: 'app' }, [
    Sidebar(),
    Header(),
    h('main', { className: 'main' }, [Switch({ router: authenticatedRouter })]),
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
