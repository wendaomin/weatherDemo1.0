import React from 'react'
import SliderArrow from "./SliderArrow";
import $ from 'jquery'
import Describe from './Describe'
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
            isShow: false
        }
    }
//实现移动轮播图的核心功能
    go(n) {
        var len = this.props.items.length;//4
        var _n = this.state.nowLocal + n;
        if (_n === len + 1) {
            this.$bannerInner.css({
                left: 0
            });
            _n = 1;
        }
        if (_n < 0) {
            this.$bannerInner.css({
                left: -2400
            });
            _n = len - 1;
        }

        this.setState({
            nowLocal: _n
        });

        this.$bannerInner.animate({
            left: -800 * _n
        }, 200);
    }

    componentDidMount() {
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
    }

    handleMouseOut() {
        this.setState({
            isShow: false
        });
    };

    handleMouseOver() {
        this.setState({
            isShow: true
        });
    }
    updateFinalWeather(val){
      console.log('data'+val)
    }
  onRef(ref){
    this.child = ref
    console.log('ref'+this.child)
  }
    render() {
        var count = this.props.items.length;
        var arrowNodes = this.props.arrows ? <SliderArrow turn={this.go.bind(this)} isShow={this.state.isShow}/> : null;
        return (
            <div className="banner" onMouseOut={this.handleMouseOut.bind(this)}
                 onMouseOver={this.handleMouseOver.bind(this)}>
                <div className="bannerInner">
                    {
                        this.props.items.map((item, index) => {
                            return <Describe key={index} item = {item} index = {index} updateFinalWeather = {this.updateFinalWeather.bind(this)}/>
                        })
                       
                    }
                    <Describe key={0} item = {this.props.items[0]} index = {0}/>
                </div>
                {
                    arrowNodes
                }
                
            </div>

        )
    }
}


