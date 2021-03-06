This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Summary
A code challenge.

## Notes
1. Using create-react-app was a requirement of the project. I prefer using my own webpack config that I have maintained and adapt over the past few years.

## Getting Started

```sh
yarn install
```

Testing requires watchman (at least on a Mac...)

```sh
brew install watchman
```

## Available Scripts
In the project directory, you can run:

```sh
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```sh
yarn test
```

Launches the test runner in the interactive watch mode.

```sh
yarn run storybook
```

Runs the storybook<br>
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

The page will reload if you make edits.

```sh
yarn run coverage
```

Outputs the test coverage map for the component library.

```sh
yarn run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
