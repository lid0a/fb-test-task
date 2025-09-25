import { h } from '~/lib/voy';
import { Icon } from '~/lib/ui-kit/icon';
import { Input } from '~/lib/ui-kit/input';
import { IconButton } from '~/lib/ui-kit/icon-button';
import { Dropdown, DropdownTrigger } from '~/lib/ui-kit/dropdown';
import { Avatar } from '~/lib/ui-kit/avatar';

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
