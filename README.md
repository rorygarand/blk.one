This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Design Decisions
I felt that some choices I made during development could possibly benefit from a small explanation.

1. `redux`: This project is small enough to not really need a store. However, I ultimately viewed this challenge as a small piece in a larger puzzle. I wanted to approach the requirements with the mindset of allowing anyone to extend the feature set easily in the future.
2. `styled-components`: I'm a big fan of css-in-js in theory, but in practice this is the only solution I like to use.
3. `storybook`: I'm more familiar with storybook than styleguidist. I thought it would work well in concert with the unit tests.

## Notes
1. Try as I might I wasn't able to get 100% test coverage before throwing in the towel. I especially had trouble intercepting http requests with the eosjs library, everything else was fairly small. Maybe if I had more time / less responsibilities...
2. Thank you for taking time to review this!

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
