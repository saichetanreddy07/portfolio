import { createBrowserRouter, Navigate } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'

const basename = new URL(import.meta.env.BASE_URL, window.location.href).pathname

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename },
)
