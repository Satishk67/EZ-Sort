import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkDegraded, ClerkProvider } from '@clerk/clerk-react'

const myClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Key:", myClerkKey);
if(!myClerkKey) throw new Error("Clerk Key not found");
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={myClerkKey}>
    <App />
  </ClerkProvider>
  </StrictMode>,
)
