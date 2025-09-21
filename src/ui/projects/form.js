import { h } from '~/lib/voy';
import { Input } from '~/ui/shared/input';
import { Label } from '~/ui/shared/label';
import { Button } from '~/ui/shared/button';

export function ProjectForm({ initialValues = {}, onSubmit = () => {} } = {}) {
  return h(
    'form',
    {
      onSubmit(event) {
        event.preventDefault();
        const { name, startDate, endDate, priority, description } =
          event.target;
        onSubmit(
          {
            name: name.value,
            startDate: startDate.value,
            endDate: endDate.value,
            priority: priority.value,
            description: description.value,
          },
          event,
        );
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
          value: initialValues.name,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Starts', for: 'startDate' }),
        h('input', {
          type: 'date',
          id: 'startDate',
          name: 'startDate',
          required: true,
          value: initialValues.startDate,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Deadline', for: 'endDate' }),
        h('input', {
          type: 'date',
          id: 'endDate',
          name: 'endDate',
          required: true,
          value: initialValues.endDate,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Priority', for: 'priority' }),
        h(
          'select',
          {
            id: 'priority',
            name: 'priority',
            required: true,
            value: initialValues.priority,
          },
          [
            h('option', { value: 'low' }, 'Low'),
            h('option', { value: 'medium' }, 'Medium'),
            h('option', { value: 'high' }, 'High'),
          ],
        ),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Description', for: 'description' }),
        h('textarea', {
          id: 'description',
          name: 'description',
          required: true,
          value: initialValues.description,
        }),
      ]),
      Button({ label: 'Save Project' }),
    ],
  );
}
