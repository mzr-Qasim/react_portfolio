import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';  // <- this imports Bootstrap
import './assets/styles/index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)



