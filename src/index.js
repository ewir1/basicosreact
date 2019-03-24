import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import PrimerComponent from './componentes/Aplicacion';



ReactDOM.render(<PrimerComponent />, document.getElementById('root'));

serviceWorker.unregister();
