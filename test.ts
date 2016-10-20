import test from 'ava';

import {foo} from './index';

test('foo is foo', (t) => {
  t.is(foo(), 'foo');
});
