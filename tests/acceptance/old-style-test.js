import PageObject, { collection, visitable } from 'test-page-object/tests/page-object';
import { test } from 'qunit';
import moduleForAcceptance from 'test-page-object/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | old style');

test('visiting / in an old school test', function(assert) {
  let flow = createPageObject();
  flow.defaultRoute.visit();

  andThen(function() {
    assert.equal(currentURL(), '/', 'Default route is active');
    assert.strictEqual(flow.defaultRoute.items().count, 4, 'Correct count of items');
  });
});

function createPageObject() {
  return PageObject.create({

    defaultRoute: {
      visit: visitable('/'),
      items: collection({
        itemScope: '.list li',
      }),
    },
  });
}
