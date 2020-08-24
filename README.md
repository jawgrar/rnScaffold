# rnScaffold
React Native sample app

To run the application, follow these instructions:

## setup
1. `yarn install`
1. `cd ios` and `pod install`

## run
1. launch first `yarn start`
1. in a separate terminals run `yarn ios` or `yarn android`

## test
To test the app, there are 2 options:

1. Test with jest only `yarn test`
1. Test with detox, run first `detox build -c ios` or `detox build -c android` then `detox test -c ios` or `detox test -c android`
