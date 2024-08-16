# Omcare Todo App

This is a minimal Todo application built with React.js.

## Getting Started

To run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MouzamSadiq/omcare-todo-list-app.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be up and running in your browser!

## About the Application

Omcare Todo App is designed to be a simple and minimalistic task management tool. The app supports both light and dark modes and provides the following features:

- **Add and Delete Tasks:** Users can easily add and remove tasks.
- **Form Validation:** Basic validation prevents adding empty tasks. For more advanced validations, libraries like Formik or React Hook Form with Zod can be integrated. MUI's `TextHelper` can also be utilized for displaying validation messages.

## Code Structure

The codebase is modular and organized into small, reusable components for ease of maintenance and debugging:

- **Main Container:** The primary wrapper for the application.
- **Form Component:** Handles task input and submission.
- **List Component:** Maps and displays the list of tasks.
- **Item Component:** Shows individual tasks along with a delete button.
- **Alert Component:** A reusable alert component that can be customized via props.
- **Custom Theme Component:** MUI-based theme switching is handled here, with `createContext` allowing theme updates from anywhere in the application.
- **ThemeSwitcher Component:** A reusable component for toggling between light and dark modes.

This structure minimizes boilerplate code and enhances the ease of debugging and scalability.
