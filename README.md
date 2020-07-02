# Ivo Evans's Portfolio

This is my portfolio site. It's built in react with native CSS. While writing it I developed a set of implicit rules for my CSS, which it might now be helpful to make explicit. If you're developing this after a while, be sure to read them. They might also be interesting if you are an employer looking to hire me.

## CSS conventions

1. Use the BEM naming convention.
2. Use vanilla CSS.
3. Any styling which is for a specific component should be in a CSS file of the same name as the component's file, in the same folder as the component.
4. React Transition Group CSS should go in animations.css. Other CSS animations can go in their component folders.
5. Use combinators and inheritance to keep CSS DRY and achieve maximum style changes with minimal markup and code changes.
6. Do not use inheritance if it makes no practical difference.
7. Lift variables up by defining them in index.css
8. Define breakpoints in the minimum number of places (i.e. index.css)
9. If you need to use a piece of CSS namespace in more than one place, put a comment in both places referencing the other place you use it. Two notable exceptions to this rule are .page--white and .page--black, which appear throughout the CSS and are fundamental to the design.

## Workflow conventions

As well as CSS conventions there are some workflow conventions:

1. work in branches based off issues
2. Begin branch names with issue numbers followed by underscores
3. Use the conventional commit commit syntax (commitizen is installed to help with this)
4. Relate every change to its github issue

## Generated readme below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
