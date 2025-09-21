import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { Button } from '~/ui/shared/button';
import { Icon } from '~/ui/shared/icon';

export function ProjectsPage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Projects',
      actions: [
        Button({
          label: 'Add Project',
          startIcon: Icon({ name: 'plus', width: 24, height: 24 }),
        }),
      ],
    }),
  ]);
}
