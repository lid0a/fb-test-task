import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Button({
  label,
  startIcon,
  endIcon,
  'data-color': color = 'primary',
  className,
  ...buttonProps
}) {
  return h(
    'button',
    {
      className: clsx('button', className),
      'data-color': color,
      ...buttonProps,
    },
    [
      startIcon ? h('div', { 'data-icon': 'start' }, [startIcon]) : null,
      h('span', null, label),
      endIcon ? h('div', { 'data-icon': 'end' }, [endIcon]) : null,
    ],
  );
}
