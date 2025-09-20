import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function IconButton({
  icon,
  className,
  'data-color': color = 'primary',
  ...buttonProps
}) {
  return h(
    'button',
    {
      className: clsx('icon-button', className),
      'data-color': color,
      ...buttonProps,
    },
    [icon],
  );
}
