# Props-Drilling Directory

This folder demonstrates the concept of props drilling and the use of React Context API:

- **Props Drilling:** Components (`component1`, `component2`, `component3`) show how data and functions can be passed through multiple layers of components via props.
- **Context API:** `messageContext.js` creates a React context, and the components use `useContext` to access shared state and functions without passing them explicitly through every level.

This directory is a practical example of how to manage deeply nested state and avoid excessive props drilling by leveraging the Context API.
