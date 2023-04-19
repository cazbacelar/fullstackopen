# Phonebook 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Important things I learned from these exercises:

## Exercises 2.6-2.10

- Get/edit the value of an input tag
  - This is done by defining a new state to the component that will controll the input element
  - By setting an onChange attribute to the input element, it calls an event handler function that will invoke the set function with the event.target.value, which is the value of the input, every time there's a change on it. This allows the user to edit the input.

- Implement a form within a component
  - The onSubmit attribute calls an event handler function that prevents the default state of submitting a form and handles adding a new person to the phonebook by creating a new object with the values from the inputs and concatenating this new object to the persons array

- map(), some() and filter() methods
  - some() is part of the checkDuplicates function, which creates a new array with persons names (using map()), and then uses the some method to check if the name in the input's value submitted by the user already exists in the persons names array. This prevent the user from adding name duplicates in the phonebook.
  - filter() is part of the event handler funciton that handles the changes on the search input. It filters the AllPersons array, which is initialised as a copy off the persons array (just so we don't manipulate the persons array), checking if the search input's value is present in any persons name or number. It returns an array with the matches and this array is passed as argument to the setPersons function, which will rerender the component and set the persons array to this filtered array, and this will get printed on the screen, allowing the user to see the results of their search for each new character they enter in the search input field.
  
## Exercise 2.11
- Get data from the server
  - Use the JSON Server tool to act as the server and create the db.json file to store the data.
- npm packages 
  - axios library for communicaiton between the browser and the server
  - json-server as a development dependency
- Fetch data from the server
  - Use effect hook to perform side effects on function components, like data fetching
  - Use the axios.get() method with the url that contains the data from the server - this returns a promise.
  - When data arrives from the server, the JavaScript runtime calls the event handler function with the response object and stores the array received from the server into the state using the function setPersons(response.data).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
