# Customers Directory

This folder contains components and data related to customer management. It demonstrates the following concepts:

- **State Management with useState:** Components like `CustomersList` and `CustomerForm` use the `useState` hook to manage local state for customer lists and form data.
- **Component Composition:** The customer list, form, and details are split into separate components and composed together in `CustomersList`.
- **Props Usage:** Data and event handlers are passed as props between components, e.g., from `CustomersList` to `CustomerForm` and `CustomerDetails`.
- **JSON Data Import:** The initial customer data is loaded from a local JSON file (`customers.json`).
- **Dynamic Rendering:** The UI updates dynamically as customers are added or selected.

This directory is a practical example of how to build a simple CRUD (Create, Read, Update, Delete) interface in React using functional components and hooks.
