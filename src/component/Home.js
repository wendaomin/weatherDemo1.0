import { Link , BrowserRouter } from "react-router-dom";
import '../assets/css/home.css'
function home (){
  return (
    <div className="home-container">
      <button className='home-btn'><Link to="/weather">Start App</Link></button>
    </div>
  );
}
export default home