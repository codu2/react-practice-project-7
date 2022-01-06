import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

//<App/> component를 <BrowserRouter></BrowserRouter> component로 wrapping 해줌
