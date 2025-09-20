import { h } from '~/lib/voy';
import { Icon } from './icon';
import { Input } from './input';
import { IconButton } from './icon-button';
import { Dropdown, DropdownTrigger } from './dropdown';
import { Avatar } from './avatar';

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
      Dropdown({
        trigger: DropdownTrigger({
          label: 'Evan Yates',
          startIcon: Avatar({
            src: '/avatar.jpg',
            alt: 'Evan Yates',
          }),
          endIcon: Icon({ name: 'chevron-down', width: 24, height: 24 }),
        }),
        items: [
          { label: 'Settings', value: 'settings' },
          { label: 'Profile', value: 'profile' },
        ],
      }),
    ]),
  ]);
}
