import { h } from '~/lib/voy';
import { Button } from '~/ui/shared/button';
import { Input } from '~/ui/shared/input';
import { Icon } from '~/ui/shared/icon';
import { FormGroup } from '~/ui/shared/form-group';
import { signIn } from '~/api/auth';
import { router } from '~/router';
import { Checkbox } from '~/ui/shared/checkbox';

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
            const { email, password, rememberMe } = event.target;
            const success = signIn({
              email: email.value,
              password: password.value,
              rememberMe: rememberMe.checked,
            });
            if (success) {
              router.redirect('/');
            }
          },
        },
        [
          FormGroup({
            id: 'email',
            label: 'Email Address',
            field: Input({
              id: 'email',
              name: 'email',
              type: 'email',
              required: true,
            }),
          }),
          FormGroup({
            id: 'password',
            label: 'Password',
            field: Input({
              id: 'password',
              name: 'password',
              type: 'password',
              required: true,
            }),
          }),
          Checkbox({
            id: 'rememberMe',
            name: 'rememberMe',
            label: 'Remember me',
            style: {
              marginBlock: 'var(--spacing-md)',
            },
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
