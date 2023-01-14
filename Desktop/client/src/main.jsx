import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

if (import.meta.env.MODE=='development') axios.defaults.baseURL = 'http://localhost:5000/';


ReactDOM.createRoot(document.getElementById('root')).render( <App />)
