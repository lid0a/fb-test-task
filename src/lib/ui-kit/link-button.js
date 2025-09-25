import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function LinkButton({
  label,
  startIcon,
  endIcon,
  'data-color': color = 'primary',
  className,
  ...anchorProps
}) {
  return h(
    'a',
    {
      className: clsx('button', className),
      'data-color': color,
      ...anchorProps,
    },
    [
      startIcon ? h('div', { 'data-icon': 'start' }, [startIcon]) : null,
      h('span', null, label),
      endIcon ? h('div', { 'data-icon': 'end' }, [endIcon]) : null,
    ],
  );
}
