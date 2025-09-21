import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { ProjectForm } from '~/ui/projects/form';

export function AddProjectPage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Add project',
    }),
    ProjectForm(),
  ]);
}
