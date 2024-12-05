import Navbar from './companets/Navbar/Navbar';
import Card from './companets/card/card';
import Studies from  './companets/Studies/Studies';
import './App.css';
import Testimonials from './companets/Testimonials/Testimonials';
import Recent from './companets/recent/recent';
import Gettouch from './companets/GetinTouch/Gettouch';
function App() {
  return (
    <div className="App">
  <Navbar />
  <Card />
  <Studies />
  <Testimonials />
  <Recent />
  <Gettouch />
    </div>
  );
}

export default App;
