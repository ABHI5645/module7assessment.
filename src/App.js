import './App.css';
import NavigationBar1 from './components/Header/NavigationBar1';

import Footer from './components/Footer/Footer';
import Product from './components/Products_1.js/Product';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div>
      <NavigationBar1/>
      <Banner/>
      <Product/> 
      <Footer/>
      
    </div>
  );
}

export default App;
