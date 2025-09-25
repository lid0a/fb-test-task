import { h } from '~/lib/voy';

export function Icon({ name, width, height }) {
  return h('svg', { width, height }, [
    h('use', { href: `/sprite.svg#${name}` }),
  ]);
}
