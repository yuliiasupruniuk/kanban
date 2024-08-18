import { TaskStatus } from "../components/Column/types";

export const TASKS = [
  {
    title: "Build UI for onboarding flow",
    description: "Create the user interface for the onboarding process",
    status: TaskStatus.InProgress,
  },
  {
    title: "Implement authentication system",
    description: "Develop the backend authentication logic",
    status: TaskStatus.ToDo,
  },
  {
    title: "Set up database schema",
    description: "Design and implement the database structure",
    status: TaskStatus.Done,
  },
  {
    title: "Create landing page",
    description: "Develop a responsive landing page for the application",
    status: TaskStatus.InProgress,
  },
  {
    title: "Optimize performance",
    description: "Improve the app's loading time and performance",
    status: TaskStatus.ToDo,
    created_at: new Date().toDateString(),
  },
  {
    title: "Fix login issues",
    description: "Resolve bugs related to user login functionality",
    status: TaskStatus.Done,
  },
  {
    title: "Test payment gateway integration",
    description: "Ensure that payment processing is functioning correctly",
    status: TaskStatus.InProgress,
  },
  {
    title: "Write unit tests",
    description: "Add unit tests to critical backend features",
    status: TaskStatus.ToDo,
  },
  {
    id: "i9j0k1l2-m3n4-5678-2345-9012345678mn",
    title: "Design email templates",
    description: "Create email templates for automated notifications",
    status: TaskStatus.Done,
  },
  {
    title: "Set up CI/CD pipeline",
    description: "Automate the deployment process using CI/CD tools",
    status: TaskStatus.InProgress,
  },
  {
    id: "k1l2m3n4-o5p6-7890-4567-1234567890op",
    title: "Create user profile page",
    description: "Build a page for users to view and edit their profiles",
    status: TaskStatus.ToDo,
  },
  {
    title: "Implement push notifications",
    description: "Add real-time push notifications for important events",
    status: TaskStatus.Done,
  },
  {
    title: "Configure API rate limiting",
    description: "Set up rate limiting to protect the API from abuse",
    status: TaskStatus.InProgress,
  },
];
