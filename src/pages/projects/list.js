import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { Icon } from '~/ui/shared/icon';
import { IconButton } from '~/ui/shared/icon-button';
import { LinkButton } from '~/ui/shared/link-button';
import { getProjects, deleteProject } from '~/api/projects';

export function ProjectsPage() {
  const projects = getProjects();
  return h('div', null, [
    Subheader({
      pageTitle: 'Projects',
      actions: [
        LinkButton({
          label: 'Add Project',
          href: '#/projects/add',
          startIcon: Icon({ name: 'plus', width: 24, height: 24 }),
        }),
      ],
    }),
    h(
      'ul',
      null,
      projects.map((project) =>
        h(
          'li',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBlockStart: 'var(--spacing-md)',
            },
          },
          [
            h('a', { href: `#/projects/${project.id}` }, project.name),
            IconButton({
              icon: Icon({
                name: 'trash',
                width: 24,
                height: 24,
              }),
              'data-color': 'red',
              onClick() {
                deleteProject(project.id);
              },
            }),
          ],
        ),
      ),
    ),
  ]);
}
