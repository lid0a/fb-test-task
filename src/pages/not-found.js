import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';

export function NotFoundPage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Page not found',
    }),
  ]);
}
