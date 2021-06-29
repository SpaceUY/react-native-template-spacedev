# SpaceDev React Native Template

[![Node.js Package](https://github.com/SpaceUY/react-native-template-spacedev/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/SpaceUY/react-native-template-spacedev/actions/workflows/npm-publish.yml)

## Getting started

Seeing this in the repo? Want to use this? Run this command!

```bash
npx react-native init <app-name> --template @space-uy/react-native-template-spacedev
```

After initializing a new project with the template there are just a few configuration files you need to update.

### AppCenter SDK for crash reports

Do a full project find-and-replace for the text `appcenter-app-secret` and replace it for your app secret on app center. After you do this there is a bunch of commented code in `src/app/navigation/index.js` you may want to uncomment.

## What this includes

We tried to include all the libraries we use in all our projects and some more to improve performance, developer experience and user experience.

Here are the libraries and extras we included:

* [`redux`](https://redux.js.org/) + [`@reduxjs/toolkit`](https://redux-toolkit.js.org/usage/usage-guide) + [`redux-persist`](https://www.npmjs.com/package/redux-persist)
* [`apisauce`](https://www.npmjs.com/package/apisauce) + [`axios-cache-adapter`](https://www.npmjs.com/package/axios-cache-adapter) so you can query your api with a slightly improved `axios` and configurable caching
* [`@react-navigation/native`](https://reactnavigation.org/)
* [`react-native-keyboard-aware-scroll-view`](https://github.com/APSL/react-native-keyboard-aware-scroll-view) to handle the keyboard automatically - remember to use `KeyboardAwareScrollView`, `KeyboardAwareFlatList` and `KeyboardAwareSectionList` instead of their native counterparts when you need to deal with the keyboard, don't make the mistake of nesting one within the other either
* [`useKeyboardHeight`](https://kb.spacedev.uy/books/react-native/page/dealing-with-the-keyboard) for specific, kinda low-level keyboard handling on iOS
* [`status` and `error`](https://kb.spacedev.uy/books/redux/page/global-error-and-status-management-in-redux) slices for global error handling
* [`react-native-background-upload`](https://www.npmjs.com/package/react-native-background-upload) so you can upload your files in the most performant way possible
* [`react-native-image-crop-picker`](https://www.npmjs.com/package/react-native-image-crop-picker) so you can grab pictures off of your camera roll and upload them
* [`useImageUpload`](https://kb.spacedev.uy/books/file-upload-s3/page/react-native) so you can upload your images without even thinking of [`react-native-image-crop-picker`](https://www.npmjs.com/package/react-native-image-crop-picker) (just remember to use the hook and configure the library there so it suits your needs)
* Theming with [`@react-navigation/native`](https://reactnavigation.org/)
* `useMountEffect` because `useEffect` without dependencies is not descriptive enough. Remember that if you are working on a screen maybe the best you can do is resorting to [`useFocusEffect`](https://reactnavigation.org/docs/function-after-focusing-screen#triggering-an-action-with-the-usefocuseffect-hook) and [`useIsFocused`](https://reactnavigation.org/docs/function-after-focusing-screen#re-rendering-screen-with-the-useisfocused-hook).
* [`useStyles`](https://kb.spacedev.uy/books/react-native/page/styles-handling-in-steroids) hook so you have access to your theme and safe area insets, no need to use `SafeAreaView` (please don't use it)
* i18n with [`react-native-localization`](https://www.npmjs.com/package/react-native-localization)
* [`react-native-svg`](https://www.npmjs.com/package/react-native-svg#use-with-svg-files) configured so you can just import svg files and use them as components
* `appcenter` for crash reports
* `commitlint` and `eslint` run automatically before each commit through `husky`
* `bitbucket-pipelines` to run linting

### How do I structure my project?

Just follow the examples in all the features. `CONTRIBUTING.md` has a more detailed explanation.

If you have reusable components you need put them in the `components` folder.

If you have a new `feature`, be it a `redux` slice for something alone or maybe it has a screen that you'll later navigate to, put it in the `features` folder. See how the `counter` feature is mapped to a folder called the same way with the component inside it and its redux slice and api helpers?

When you have strings you need to show in your UI they go in `localization/en.js` because if you later want to translate the app you'll be ready to do that without any major hassle. An example of how to access those strings can be found in the `counter/Counter.js` component.

When you begin, update your theme to match your app. To access that theme read the next section about `useStyles`.

In the `app` folder there are shared files only, there is the `redux` store configuration, the `apisauce` client configuration and global services like the `fileUpload` function.

Lastly, for when you need a new screen to be handled by a navigator look for that navigator under `navigation`. If it ain't there create it.

### How do I use the useStyles hook?

```js
const MyComponent = () => {
  const styles = useStyles(makeStyles);
};

const makeStyles = createStyleFactory((theme, safeAreaInsets) =>
  StyleSheet.create({
    // styles
  }),
);
```

That's it, all you need to know is your `StyleSheet`s you'll build through factory functions that receive two parameters: the `theme` as it is returned by `useTheme` from `@react-navigation/native` and the `safeAreaInsets`.

Usually, you can just get the `colors` property off of the `theme` since it is what you'll use the most.

The shape of `safeAreaInsets` is:

| Property name | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `top`         | useful to avoid the notch                                                   |
| `left`        | if your app supports landscape orientation use this to avoid the notch      |
| `bottom`      | useful to avoid the bottom bar on iOS                      |
| `right`       | if your app supports landscape orientation use this to avoid the bottom bar |

### Making API requests

Follow these steps:

1. Update the `API_URL` variable in the `.env` file
2. Use the `makeApiCall` higher order function in your api files like the following snippet

```js
import makeApiCall from '_app/makeApiCall';

// the following does a post request to your server to the
// baseUrl + 'something' with the data variable as its body
const fetchSomethingFromTheApi = makeApiCall((client, data) => client.post('something', data));
```

### How do I upload files?

The `useImageUpload` hook or the others you can find to upload other types of files in [our knowledge base](https://kb.spacedev.uy/books/file-upload-s3/page/react-native) work like so:

```js
const [progress, handleUpload] = useImageUpload(onValueChange);
```

Think of that `onValueChange` function it receives as what would be `(value) => setFieldValue('coverUrl', value)` in formik.

Since we recommend you use formik but we can't use hooks inside the formik context we recommend you make a separate component to call this hook and get that function as a prop.

Other than that, all you need to do is to have you api client properly setup and the `POST /storage` endpoint configured like it is [in our other knowledge base article](https://kb.spacedev.uy/books/file-upload-s3/page/nestjs-generic-storage-module).

For a full example, there is a feature called `file-upload` for you to look at in this template!

## Credit where credit's due

This template is based off of [`react-native-new-template`](https://github.com/Esemesek/react-native-new-template) and the official [`react-native-template-typescript`](https://github.com/react-native-community/react-native-template-typescript).

If you want to make your own template those are your example to follow.

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
