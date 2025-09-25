import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { Icon } from '~/lib/ui-kit/icon';
import { IconButton } from '~/lib/ui-kit/icon-button';
import { LinkButton } from '~/lib/ui-kit/link-button';
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
