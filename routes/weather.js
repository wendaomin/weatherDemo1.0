module.exports = (app) => {
  const express = require("express");
  const Router = express.Router({
    mergeParams: true,
  });
  var propsObj = {
    items: [
        {  
            cityName:"Sydney",
            src: " https://img-blog.csdnimg.cn/20210119235145284.png",
            alt: "img-1",
            temperature:{
              currentTemperatrue:"19 °C",
              minTemperatrue:"16 °C",
              maxTemperatrue:"22 °C"
            },
            weatherInfo: "Light Rain"
        },
        {
           cityName:"Melbourne",
            src: "https://img-blog.csdnimg.cn/20210119235145291.png",
            alt: "img-2",
            temperature:{
              currentTemperatrue:"14 °C",
              minTemperatrue:"7 °C",
              maxTemperatrue:"19 °C"
            },
            weatherInfo: "Sunny"
        },
        {
            cityName:"Brisbane",
            src: "https://img-blog.csdnimg.cn/20210119235145338.png",
            alt: "img-3",
            temperature:{
              currentTemperatrue:"25 °C",
              minTemperatrue:"18 °C",
              maxTemperatrue:"29 °C"
            },
            weatherInfo: "Thundershower"
        }
    ],
    arrows: true,
    interval: 2000
};
app.use('/weather/api',Router)
  Router.get('/sydney/:id', (req, res)=>{
    var id = req.params.id
    var data = propsObj.items[id]
     res.send(data)
  })
 
}