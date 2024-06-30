import React from "react";
import { useSelector } from "react-redux";

const NOTES = () => {
  const theme = useSelector(state => state.theme.theme);

  const themeStyles = {
    container: theme === 'dark' ? 'bg-gray-dark text-text' : 'bg-white text-gray-dark',
    section: theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200',
    title: theme === 'dark' ? 'text-gold' : 'text-gray-dark',
    card: theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-dark',
    code: theme === 'dark' ? 'inline-block px-2 py-0 rounded-md text-gray-300 bg-gray-800' 
    : 'inline-block px-2 py-0 rounded-md text-gray-600 bg-gray-200',
  };

  
  return (
    <div className={`py-8 px-5 ${themeStyles.container}`}>
      <div className="flex justify-center">
        <h2 className={`text-2xl font-bold ${themeStyles.title}`}>Redux Notes</h2>
      </div>
      <div className="mt-5 mx-auto max-w-4xl">
        <h1 className={`text-3xl font-bold mb-8 text-center ${themeStyles.title}`}>Redux Concepts</h1>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">Store</h2>
            <p>
              The Store holds the entire state of your application. It is the
              single source of truth and allows you to access the state from
              anywhere in your app.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">useSelector</h2>
            <p>
              The <code className={`${themeStyles.code}`}>useSelector</code> hook is used to extract data from the
              Redux store state using a selector function. It ensures that your
              component re-renders when the selected state changes.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">Reducers</h2>
            <p>
              Reducers are pure functions that take the current state and an
              action as arguments, and return a new state. They specify how the
              application's state changes in response to actions sent to the
              store.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">Action Middleware</h2>
            <p>
              Action middleware in Redux intercepts actions before they reach the reducers,
              allowing for asynchronous operations, logging, or other side effects. 
              It enhances Redux's capabilities beyond synchronous state updates.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">subscribe()</h2>
            <p>
              The <code className={`${themeStyles.code}`}>subscribe()</code> method in Redux allows components to listen 
              to state changes in the store. It triggers whenever an action modifies the state,
              enabling components to update their UI in response to these changes.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold mb-2">Dispatch</h2>
            <p>
              The <code className={`${themeStyles.code}`}>dispatch</code> function is used to send actions to the
              Redux store. This is the only way to trigger a state change. When{" "}
              <code className={`${themeStyles.code}`}>dispatch</code> is called, the store runs the reducer and
              updates the state accordingly.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md w-1/2`}>
            <h2 className="text-2xl font-bold mb-2">Old Redux</h2>
            <p>
              • You have to configure Redux DevTool Extension explicitly
              <br />
              • We need to manually handle and change the state immutably.
              <br />
              • Configuring a Redux store is too complicated
              <br />
              • Need to create reducers and action creators separately - lots of
              boilerplate code
              <br />
              • Lots of code needed to handle asynchronous requests and error
              handling was also manual
              <br />• Class Based Implementation
            </p>
          </div>
          <div className={`${themeStyles.card} p-6 rounded-lg shadow-md w-1/2`}>
            <h2 className="text-2xl font-bold mb-2">Redux Toolkit</h2>
            <p>
              • It provides automatic support for Redux DevTools Extension.
              <br />
              • It provides support for the Immer.js library which automatically
              handles state immutability.
              <br />
              • Configuring a Redux store is much easier with built-in
              middleware support.
              <br />• The <code className={`${themeStyles.code}`}>createSlice()</code> function replaces the need
              for separate action and reducer creation with a single function.
              <br />• The <code className={`${themeStyles.code}`}>createAsyncThunk</code> function simplifies
              making asynchronous requests.
              <br />• Functional Implementation with TypeScript and support for
              Hooks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOTES;
