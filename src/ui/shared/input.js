import { h } from '~/lib/voy';
import { clsx } from '~/utils/clsx';

export function Input({ startIcon, endIcon, className, style, ...inputProps }) {
  return h('div', { className: clsx('input', className), style }, [
    startIcon ? h('div', { 'data-icon': 'start' }, [startIcon]) : null,
    h('input', inputProps),
    endIcon ? h('div', { 'data-icon': 'end' }, [endIcon]) : null,
  ]);
}
