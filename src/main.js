import '~/normalize.css';
import '~/style.css';
import { h, watchEffect, mount, patch } from '~/lib/voy';
import { Switch } from '~/lib/router';
import { Sidebar } from '~/ui/shared/sidebar';
import { router } from '~/router';

function App() {
  return h('div', { className: 'app' }, [
    Sidebar(),
    h('header', { className: 'header' }, []),
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
