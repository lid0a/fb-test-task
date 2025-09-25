import { h } from '~/lib/voy';

export function FormGroup({ id, label, field } = {}) {
  return h('div', { className: 'form-group' }, [
    h('label', { for: id }, label),
    field,
  ]);
}
