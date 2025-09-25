import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { ProjectForm } from '~/ui/projects/form';
import { createProject } from '~/api/projects';

export function AddProjectPage() {
  return h('div', null, [
    Subheader({
      pageTitle: 'Add project',
    }),
    ProjectForm({
      onSubmit(data, event) {
        createProject(data);
        event.target.reset();
      },
    }),
  ]);
}
