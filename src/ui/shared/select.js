import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Select({ options = [], className, ...selectProps } = {}) {
  return h(
    'select',
    { className: clsx('select', 'input', className), ...selectProps },
    [
      h('button', {}, [h('selectedcontent', null)]),
      ...options.map((option) =>
        h('option', { value: option.value }, option.label),
      ),
    ],
  );
}
