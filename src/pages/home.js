import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { Button } from '~/lib/ui-kit/button';
import { Icon } from '~/lib/ui-kit/icon';

export function HomePage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Dashboard',
      actions: [
        Button({
          label: 'Nov 16, 2020 - Dec 16, 2020',
          'data-color': 'neutral',
          startIcon: Icon({ name: 'calendar', width: 24, height: 24 }),
        }),
      ],
    }),
  ]);
}
