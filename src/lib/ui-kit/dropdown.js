import { h, observable } from '~/lib/voy';
import { Button } from './button';

const state = observable('closed');

export function DropdownTrigger({ label, startIcon, endIcon }) {
  return Button({
    label,
    startIcon,
    endIcon,
    'data-color': 'surface',
    onClick(event) {
      event.stopPropagation();
      state.value = state.value === 'open' ? 'closed' : 'open';
    },
  });
}

function handleClickOutside() {
  state.value = 'closed';
}

export function Dropdown({ trigger, items = [], onValueChange = () => {} }) {
  document.body.removeEventListener('click', handleClickOutside);
  document.body.addEventListener('click', handleClickOutside);

  return h(
    'div',
    {
      className: 'dropdown',
      'data-state': state.value,
      onKeyDown(event) {
        if (event.key === 'Escape') {
          state.value = 'closed';
        }
      },
    },
    [
      trigger,
      h(
        'ul',
        { className: 'dropdown-content' },
        items.map((item) =>
          h(
            'li',
            {
              className: 'dropdown-item',
              onClick() {
                onValueChange(item.value);
              },
            },
            item.label,
          ),
        ),
      ),
    ],
  );
}
