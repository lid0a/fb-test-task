import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Label({ title, className, ...labelProps } = {}) {
  return h(
    'label',
    { className: clsx('label', className), ...labelProps },
    title,
  );
}
