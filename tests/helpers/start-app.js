import Application from '../../app';
import config from '../../config/environment';
import { merge } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  // Enable autoboot for old-school tests. It is disabled in config/environment for new-style tests...
  attributes.autoboot = true;

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
