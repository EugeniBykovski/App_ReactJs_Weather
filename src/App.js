// добавляем реакт из библиотеки реакт
import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "35fa35eed3b9b2fbdd297740e15b8a9e";

// создаем новый класс / компонент
// один общий тег div - родитель, чтобы писать целые структуры
class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = asinc (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const date = await api_url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds();

      this.setState ({
        temp: date.main.temp,
        city: date.name,
        country: date.sys.country,
        pressure: date.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState ({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Error: Введите название города!"
      });
    }
  }

  render() {
    return (
      <div calssName="wrapper">
        <div className="main">
          <div className="container">
             <div className="row">
               <div calssName="col-sm-5 info">
                <Info />
               </div>

               <div calssName="col-sm-7 form">
                 <Form weatherMethod={this.gettingWeather}/>
                 <Weather
                   temp={this.state.temp}
                   city={this.state.city}
                   country={this.state.country}
                   pressure={this.state.pressure}
                   sunset={this.state.sunset}
                   error={this.state.error}
                 />
               </div>
             </div>
           </div>
        </div>
      </div>
    );
  }
}

// экспортируем наш класс в index.js
export default App;
