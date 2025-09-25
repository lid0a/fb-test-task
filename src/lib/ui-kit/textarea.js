import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Textarea({ className, ...textareaProps } = {}) {
  return h('textarea', {
    className: clsx('textarea', className),
    ...textareaProps,
  });
}
