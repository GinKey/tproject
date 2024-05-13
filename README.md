# tproject

## Getting Started

This project is a Node.js application using Express and MySQL.

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs the necessary dependencies for the project.

### `npm start`
Runs the React app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Environment Configuration

To configure the environment variables, follow these steps: 
1. Create a file named `.env` in the root directory of your project.
2. Copy the contents of `.env.example` to `.env`:
   ```sh
   cp .env.example .env
   ```
3. Update the values in `.env` with your database configuration:
   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=for_server
   PORT=3001
   ```

## Running the Server

To run the server, execute the following command:
   ```sh
   node src/server/server.js
   ```
The server will start on the port specified in your `.env` file.

## API Endpoints

### Get all activities
- **URL**: `/activity`
- **Method**: `GET`
- **Description**: Returns a list of all activities.

### Add a new activity
- **URL**: `/activity`
- **Method**: `POST`
- **Description**: Adds a new activity.
- **Request Body**:
   ```json
   {
     "activity": "Description of the activity"
   }
   ```

### Delete an activity
- **URL**: `/activity/:id`
- **Method**: `DELETE`
- **Description**: Deletes an activity by ID.

## Project Structure

```
tproject/
├── src/
│   └── server/
│       └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).
