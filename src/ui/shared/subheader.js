import { h } from '~/lib/voy';

export function Subheader({ pageTitle, actions = [] }) {
  return h('div', { className: 'subheader' }, [
    h('h1', { className: 'page-title' }, pageTitle),
    ...actions,
  ]);
}
