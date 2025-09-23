import { h } from '~/lib/voy';
import { Button } from '~/ui/shared/button';
import { Input } from '~/ui/shared/input';
import { Icon } from '~/ui/shared/icon';
import { FormGroup } from '~/ui/shared/form-group';

export function SignInPage() {
  return h(
    'div',
    {
      style: {
        width: '40rem',
        backgroundColor: 'var(--color-surface)',
        padding: 'var(--spacing-lg)',
        margin: 'var(--spacing-lg) auto',
        borderRadius: 'var(--radius-lg)',
      },
    },
    [
      h('h1', null, 'Sign In to Woorkroom'),
      h(
        'form',
        {
          onSubmit(event) {
            event.preventDefault();
          },
        },
        [
          FormGroup({
            id: 'email',
            label: 'Email Address',
            field: Input({ id: 'email', type: 'email', required: true }),
          }),
          FormGroup({
            id: 'password',
            label: 'Password',
            field: Input({ id: 'password', type: 'password', required: true }),
          }),
          Button({
            label: 'Sign In',
            endIcon: Icon({ name: 'arrow-right', width: 24, height: 24 }),
          }),
        ],
      ),
    ],
  );
}
