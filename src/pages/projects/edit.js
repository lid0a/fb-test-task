import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { ProjectForm } from '~/ui/projects/form';
import { getProject, updateProject } from '~/api/projects';

export function EditProjectPage({ params }) {
  const project = getProject(params.id);
  return h('div', null, [
    Subheader({
      pageTitle: 'Edit project',
    }),
    ProjectForm({
      initialValues: project,
      onSubmit(data) {
        updateProject(project.id, data);
      },
    }),
  ]);
}
