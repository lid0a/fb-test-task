import { h } from '~/lib/voy';
import { Input } from '~/ui/shared/input';
import { Button } from '~/ui/shared/button';
import { Textarea } from '../shared/textarea';
import { Select } from '../shared/select';
import { FormGroup } from '../shared/form-group';

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
      FormGroup({
        id: 'name',
        label: 'Project Name',
        field: Input({
          id: 'name',
          name: 'name',
          required: true,
          placeholder: 'Project Name',
          value: initialValues.name,
        }),
      }),
      FormGroup({
        id: 'startDate',
        label: 'Starts',
        field: Input({
          type: 'date',
          id: 'startDate',
          name: 'startDate',
          required: true,
          value: initialValues.startDate,
        }),
      }),
      FormGroup({
        id: 'endDate',
        label: 'Deadline',
        field: Input({
          type: 'date',
          id: 'endDate',
          name: 'endDate',
          required: true,
          value: initialValues.endDate,
        }),
      }),
      FormGroup({
        id: 'priority',
        label: 'Priority',
        field: Select({
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
      }),
      FormGroup({
        id: 'description',
        label: 'Description',
        field: Textarea({
          id: 'description',
          name: 'description',
          required: true,
          value: initialValues.description,
        }),
      }),
      Button({ label: 'Save Project' }),
    ],
  );
}
