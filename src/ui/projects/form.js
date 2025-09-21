import { h } from '~/lib/voy';
import { Input } from '~/ui/shared/input';
import { Label } from '~/ui/shared/label';
import { Button } from '~/ui/shared/button';
import { db } from '~/db';

export function ProjectForm() {
  return h(
    'form',
    {
      onSubmit(event) {
        event.preventDefault();
        const { name, startDate, endDate, priority, description } =
          event.target;
        db.createProject({
          name: name.value,
          startDate: startDate.value,
          endDate: endDate.value,
          priority: priority.value,
          description: description.value,
        });
        event.target.reset();
      },
    },
    [
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Project Name', for: 'name' }),
        Input({
          id: 'name',
          name: 'name',
          required: true,
          placeholder: 'Project Name',
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Starts', for: 'startDate' }),
        h('input', {
          type: 'date',
          id: 'startDate',
          name: 'startDate',
          required: true,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Deadline', for: 'endDate' }),
        h('input', {
          type: 'date',
          id: 'endDate',
          name: 'endDate',
          required: true,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Priority', for: 'priority' }),
        h('select', { id: 'priority', name: 'priority', required: true }, [
          h('option', { value: 'low' }, 'Low'),
          h('option', { value: 'medium' }, 'Medium'),
          h('option', { value: 'high' }, 'High'),
        ]),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Description', for: 'description' }),
        h('textarea', {
          id: 'description',
          name: 'description',
          required: true,
        }),
      ]),
      Button({ label: 'Save Project' }),
    ],
  );
}
