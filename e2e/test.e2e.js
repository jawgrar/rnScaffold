describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should access login screen', async () => {
    await expect(element(by.id('loginScreen'))).toBeVisible();
  });

  it('should show google signin after tap', async () => {
    await element(by.id('googleSigninButton')).tap();
    // TODO: find a way to mock the google auth provider
    console.log('You have 20 seconds to manual login to Gmail in the app');
    await waitFor(element(by.id('homeScreen')))
      .toBeVisible()
      .withTimeout(20000);
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });

  it('should sign out after tap', async () => {
    await element(by.id('signOutnButton')).tap();
    await expect(element(by.id('homeScreen'))).toNotExist();
  });
});
