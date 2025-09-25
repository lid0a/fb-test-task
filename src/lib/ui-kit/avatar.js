import { h } from '~/lib/voy';

export function Avatar({ src, alt }) {
  return h('div', { className: 'avatar' }, [h('img', { src, alt })]);
}
