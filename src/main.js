import '~/normalize.css';
import '~/style.css';
import { h, watchEffect, mount, patch } from '~/lib/voy';

function App() {
  return h('div', null, [h('h1', null, 'Hello, world!')]);
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
