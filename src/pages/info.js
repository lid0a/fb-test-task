import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';

export function InfoPage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Info Portal',
    }),
  ]);
}
