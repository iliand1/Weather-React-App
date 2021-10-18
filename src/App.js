import { useState } from "react";
const api = {
  key: "963b7dd346a4e3a42660cab9247fe92b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    if (weather.weather[0].main === "Clear"){
      setBg("cold");
    }
      }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };
  
  //  if (weather.weather[0].main.toLower==="rain"){
  //    test = "warm"
  // }
  let [bg,setBg] = useState("")
  
  return (
    <div className={`app ${bg}`}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search your location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

// function File(props) {
//   const { name } = props;

//   const extension = name.split(".")[1];
//   const icons = {
//     jpeg: "file image icon",
//     png: "file image icon",
//     flac: "music icon",
//     mp3:"file audio outline icon",
//     exe:"save icon"
//   };
//   return <div>
//     <i className={`${icons[extension]}`}></i>
    
//     {name}</div>;
// }
export default App;
