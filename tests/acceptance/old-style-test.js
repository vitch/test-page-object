import { create, visitable } from 'ember-cli-page-object';
import { test } from 'qunit';
import moduleForAcceptance from 'test-page-object/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | old style');

test('visiting / in an old school test', function(assert) {
  let flow = createPageObject();
  flow.defaultRoute.visit();

  andThen(function() {
    assert.equal(currentURL(), '/', 'Default route is active');
  });
});

function createPageObject() {
  return create({

    defaultRoute: {
      visit: visitable('/'),
    },
  });
}
