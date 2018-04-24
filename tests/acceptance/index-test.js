import { create, visitable } from 'ember-cli-page-object';
import { currentURL } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | new style', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    let flow = createPageObject();

    await flow.defaultRoute.visit();

    assert.strictEqual(currentURL(), '/', 'Default route is active');
  });
});

function createPageObject() {
  return create({

    defaultRoute: {
      visit: visitable('/'),
    },
  });
}
