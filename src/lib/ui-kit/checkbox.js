import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Checkbox({
  label,
  className,
  style,
  id,
  ...checkboxProps
} = {}) {
  return h('div', { className: clsx('checkbox', className), style }, [
    h('input', { type: 'checkbox', id, ...checkboxProps }),
    h('label', { for: id }, label),
  ]);
}
