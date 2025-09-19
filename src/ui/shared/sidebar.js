import { h } from '~/lib/voy';
import { router } from '~/router';
import { clsx } from '~/utils/clsx';

const links = [
  { href: '#/', title: 'Dashboard' },
  { href: '#/projects', title: 'Projects' },
  { href: '#/calendar', title: 'Calendar' },
  { href: '#/vacations', title: 'Vacations' },
  { href: '#/employees', title: 'Employees' },
  { href: '#/messenger', title: 'Messenger' },
  { href: '#/info', title: 'Info Portal' },
];

export function Sidebar() {
  const pathname = router.getPathname();

  return h(
    'nav',
    { className: 'sidebar' },
    links.map((link) =>
      h(
        'div',
        {
          className: clsx(
            'sidebar-item',
            `#${pathname}` === link.href && 'active',
          ),
        },
        [h('a', { href: link.href, className: 'nav-link' }, link.title)],
      ),
    ),
  );
}
