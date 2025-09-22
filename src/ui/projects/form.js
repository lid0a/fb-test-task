import { h } from '~/lib/voy';
import { Input } from '~/ui/shared/input';
import { Label } from '~/ui/shared/label';
import { Button } from '~/ui/shared/button';
import { Textarea } from '../shared/textarea';
import { Select } from '../shared/select';

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
        Input({
          type: 'date',
          id: 'startDate',
          name: 'startDate',
          required: true,
          value: initialValues.startDate,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Deadline', for: 'endDate' }),
        Input({
          type: 'date',
          id: 'endDate',
          name: 'endDate',
          required: true,
          value: initialValues.endDate,
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Priority', for: 'priority' }),
        Select({
          id: 'priority',
          name: 'priority',
          required: true,
          value: initialValues.priority,
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
          ],
        }),
      ]),
      h('div', { style: { marginBlockStart: 'var(--spacing-md)' } }, [
        Label({ title: 'Description', for: 'description' }),
        Textarea({
          id: 'description',
          name: 'description',
          required: true,
          value: initialValues.description,
        }),
      ]),
      Button({
        label: 'Save Project',
        style: { marginBlockStart: 'var(--spacing-md)' },
      }),
    ],
  );
}
