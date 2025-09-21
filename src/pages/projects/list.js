import { h } from '~/lib/voy';
import { Subheader } from '~/ui/shared/subheader';
import { Icon } from '~/ui/shared/icon';
import { LinkButton } from '~/ui/shared/link-button';
import { db } from '~/db';

const projects = db.getProjects();
console.log(projects);

export function ProjectsPage() {
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
    // h(
    //   'ul',
    //   null,
    //   projects.map((project) =>
    //     h('li', null, [
    //       h('a', { href: `#/projects/${project.id}` }, project.name),
    //     ]),
    //   ),
    // ),
  ]);
}
