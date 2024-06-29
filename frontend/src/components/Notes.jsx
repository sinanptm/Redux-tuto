import React from 'react';

const NOTES = () => {
  return (
    <div style={{backgroundColor:"black"}} className="mt-5 mx-auto max-w-4xl">
      <div className="mb-4">
        <div className="bg-gray-800 text-white p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Store</h2>
          <p>The Store holds the entire state of your application. It is the single source of truth and allows you to access the state from anywhere in your app.</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-gray-800 text-white p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">useSelector</h2>
          <p>The <code>useSelector</code> hook is used to extract data from the Redux store state using a selector function. It ensures that your component re-renders when the selected state changes.</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-gray-800 text-white p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Reducers</h2>
          <p>Reducers are pure functions that take the current state and an action as arguments, and return a new state. They specify how the application's state changes in response to actions sent to the store.</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="bg-gray-800 text-white p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Dispatch</h2>
          <p>The <code>dispatch</code> function is used to send actions to the Redux store. This is the only way to trigger a state change. When <code>dispatch</code> is called, the store runs the reducer and updates the state accordingly.</p>
        </div>
      </div>
    </div>
  );
}

export default NOTES;
