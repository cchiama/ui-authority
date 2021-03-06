/* global Nightmare, describe, it, before, after */

module.exports.test = (uiTestCtx) => {
  describe('Module test: ui-authority:', function() {
    const { config, helpers: { login, logout } } = uiTestCtx;
    const nightmare = new Nightmare(config.nightmare);

    this.timeout(Number(config.test_timeout));

    describe('Login > navigate to app > verify message > logout', () => {
      before((done) => {
        login(nightmare, config, done);
      });
      after((done) => {
        logout(nightmare, config, done);
      });
      it('should open app and see stripes-new-app-greeting', (done) => {
        nightmare
          .wait('#clickable-authority-module')
          .click('#clickable-authority-module')
          .wait('#authority-module-display')
          .wait('#stripes-new-app-greeting')
          .then(result => { done(); })
          .catch(done);
      });
    });

    describe('Login > navigate to app settings > verify message > logout', () => {
      before((done) => {
        login(nightmare, config, done);
      });
      after((done) => {
        logout(nightmare, config, done);
      });
      it('should open app settings and see stripes-new-app-settings-message', (done) => {
        nightmare
          .wait(config.select.settings)
          .click(config.select.settings)
          .wait('a[href="/settings/authority"]')
          .click('a[href="/settings/authority"]')
          .wait('a[href="/settings/authority/general"]')
          .click('a[href="/settings/authority/general"]')
          .wait('#stripes-new-app-settings-message')
          .then(result => { done(); })
          .catch(done);
      });
    });
  });
};
