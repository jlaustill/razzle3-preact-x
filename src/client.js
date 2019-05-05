import App from './App';
// import BrowserRouter from 'react-router-dom/BrowserRouter';
import { h, render } from 'preact';

// hydrate(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

render(
<App />,
document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
