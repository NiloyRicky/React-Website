import React from 'react'
import ReactDOM  from 'react-dom'

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App';
import ContextProvider from './Context/Context';






ReactDOM.render(<>
   <React.StrictMode>
<ContextProvider>
<App/>
</ContextProvider>




  
   


  

   </React.StrictMode>

  
</>
    
,document.querySelector('#root'));

