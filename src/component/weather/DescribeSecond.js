import React from 'react'
import defaultSrc from '../../assets/images/loading.png'
import http from '../../http'
import PubSub from "pubsub-js"
export default class DescribeSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: this.props.item.cityName,
      src: defaultSrc,
      temperature: {},
      weatherInfo: "",
      data: {},
      loadData: false
    }
  }
  async componentDidMount() {
    if (this.props.index == 0) {
      PubSub.subscribe("firstTosecond", (msg, data) => {
        if (data) {
          this.setState({
            data: data
          })
          this.setState({
            alt: this.state.data.alt,
            cityName: this.state.data.cityName,
            src: this.state.data.src,
            temperature: this.state.data.temperature,
            weatherInfo: this.state.data.weatherInfo,
            loadData: true
          })
        }
      })
    }
  }
  async onloadWeatherData() {
    //ajax
    if (!this.state.loadData) {
      var res = await http.get(`/sydney/${this.props.index}`)
      if (res.status == 200) {
        var { data } = res
      }
      this.setState({
        data: data
      }
      )
      if (this.props.index == 0) {
        PubSub.publish('secondToFirst', this.state.data)
      }
      this.setState({
        alt: this.state.data.alt,
        cityName: this.state.data.cityName,
        src: this.state.data.src,
        temperature: this.state.data.temperature,
        weatherInfo: this.state.data.weatherInfo
      })
    }
  }
  render() {
    return (
      <div key={this.props.index}>
        <div className='weather-container'>
          <div className='city-name'>{this.state.cityName}</div>
          <div className='weather-active'>
            <img src={this.state.src} alt={this.state.alt} onClick={this.onloadWeatherData.bind(this)} />
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


