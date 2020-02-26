import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'oscar@arepa.dev';
  const gravatarUrl = 'https://gravatar.com/avatar/4b84ab1122c7ee522710c5ead5525839';
  expect(gravatarUrl).toEqual(gravatar(email));
});