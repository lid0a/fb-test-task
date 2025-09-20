import { h } from '~/lib/voy';
import { Icon } from './icon';
import { Input } from './input';
import { IconButton } from './icon-button';

export function Header() {
  return h('header', { className: 'header' }, [
    Input({
      type: 'search',
      startIcon: Icon({ name: 'search', width: 24, height: 24 }),
      placeholder: 'Search',
      name: 'search',
      style: { width: '412px' },
    }),
    h('div', { style: { display: 'flex', gap: 'var(--spacing-lg)' } }, [
      IconButton({
        icon: Icon({ name: 'bell', width: 24, height: 24 }),
        'data-color': 'surface',
      }),
    ]),
  ]);
}
