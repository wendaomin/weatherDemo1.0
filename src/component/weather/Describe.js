import { data } from 'jquery';
import React from 'react'
import defaultSrc from '../../assets/images/loading.png'
import http from '../../http'
export default class Describe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cityName: this.props.item.cityName,
          src: defaultSrc,
          temperature:{},
          weatherInfo:"",
          data: {}
        }
    }
   async componentDidMount(){
      //ajax
      var res  = await http.get(`/sydney/${this.props.index}`)
      if(res.status == 200){
        var {data} = res
      }
      console.log(data)
      this.setState({
        data: data}
      )
    }
    onloadWeatherData(){
         //判断当前的组件序号
        //  if(this.props.item.cityName === 'Sydney'){
        //      this.props.updateFinalWeather(this.state.data)
        //  }
        //当点击图标时候，获取天气数据，进行更改
        this.setState({
          alt:this.state.data.alt,
          cityName: this.state.data.cityName,
          src: this.state.data.src,
          temperature: this.state.data.temperature,
          weatherInfo: this.state.data.weatherInfo
        })
    }
    render() {
        return (
                <div key={this.props.index}>
                <div className='weather-container'>
                  <div className='city-name'>{this.state.cityName}</div>
                  <div className='weather-active'>
                    <img src={this.state.src} alt={this.state.alt} onClick={this.onloadWeatherData.bind(this)}/>
                    <div className='weather-data'>
                      <div>{this.state.temperature.currentTemperatrue}</div>
                      <div><span>{this.state.temperature.minTemperatrue}</span><span>{this.state.temperature.maxTemperatrue}</span></div>
                      <div className='weatherInfo'>{this.state.weatherInfo}</div>
                    </div>
                  </div>
                </div>
                </div>
        )
    }
}


