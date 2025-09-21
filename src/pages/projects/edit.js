import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { ProjectForm } from '~/ui/projects/form';
import { db } from '~/db';

export function EditProjectPage({ params }) {
  const project = db.getProject(params.id);
  return h('div', null, [
    Subheader({
      pageTitle: 'Edit project',
    }),
    ProjectForm({
      initialValues: project,
      onSubmit(data) {
        db.updateProject(project.id, data);
      },
    }),
  ]);
}
