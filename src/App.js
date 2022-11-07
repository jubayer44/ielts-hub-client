import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='font-serif'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
