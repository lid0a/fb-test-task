import { h } from '~/lib/voy';
import { router } from '~/router';
import { clsx } from '~/utils/clsx';
import { Icon } from '~/lib/ui-kit/icon';
import { Button } from '~/lib/ui-kit/button';
import { signOut } from '~/api/auth';

const links = [
  {
    href: '#/',
    title: 'Dashboard',
    icon: Icon({ width: 24, height: 24, name: 'layout' }),
  },
  {
    href: '#/projects',
    title: 'Projects',
    icon: Icon({ width: 24, height: 24, name: 'layers' }),
  },
  {
    href: '#/calendar',
    title: 'Calendar',
    icon: Icon({ width: 24, height: 24, name: 'calendar' }),
  },
  {
    href: '#/vacations',
    title: 'Vacations',
    icon: Icon({ width: 24, height: 24, name: 'plane' }),
  },
  {
    href: '#/employees',
    title: 'Employees',
    icon: Icon({ width: 24, height: 24, name: 'users' }),
  },
  {
    href: '#/messenger',
    title: 'Messenger',
    icon: Icon({ width: 24, height: 24, name: 'chat' }),
  },
  {
    href: '#/info',
    title: 'Info Portal',
    icon: Icon({ width: 24, height: 24, name: 'folder' }),
  },
];

export function Sidebar() {
  const pathname = router.getPathname();

  return h('nav', { className: 'sidebar' }, [
    h('a', { href: '#/', className: 'logo' }, [
      Icon({ width: 50, height: 50, name: 'logo' }),
    ]),
    h(
      'ul',
      { className: 'sidebar-menu' },
      links.map((link) =>
        h(
          'li',
          {
            className: clsx(
              'sidebar-menu-item',
              `#${pathname}` === link.href && 'active',
            ),
          },
          [
            h('a', { href: link.href, className: 'nav-link' }, [
              link.icon,
              h('span', null, link.title),
            ]),
          ],
        ),
      ),
    ),
    h('div', { className: 'sidebar-footer' }, [
      h(
        'div',
        {
          className: 'support',
        },
        [
          h('img', {
            src: '/illustrations/support.svg',
            alt: 'Support',
          }),
          Button({
            label: 'support',
            startIcon: Icon({ name: 'message', width: 24, height: 24 }),
          }),
        ],
      ),
      Button({
        label: 'Logout',
        'data-color': 'transparent',
        startIcon: Icon({ width: 24, height: 24, name: 'logout' }),
        onClick() {
          signOut();
        },
      }),
    ]),
  ]);
}
