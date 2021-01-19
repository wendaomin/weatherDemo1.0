import Slider from './Slider'
import '../../assets/css/weather.css'
function weather(){
  var propsObj = {
    items: [
        {   
            cityName:"Sydney"
        },
        {
           cityName:"Melbourne"
        },
        {
            cityName:"Brisbane"
        }
    ],
    arrows: true,
    interval: 2000
};
  return(
    <div className='weather-container'>
       <Slider {...propsObj}/>
    </div>
  );
}
export default weather