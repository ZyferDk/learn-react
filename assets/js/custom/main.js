`use strict`;

const scaleNames = {
  c: `celsius`,
  f: `fahrenheit`,
  k: `kelvin`,
};

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function toKelvin(celsius) {
  return celsius + 273.15;
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0, scale: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  handleKelvinChange(temperature) {
    this.setState({ scale: "k", temperature });
  }

  render() {
    const scale = this.state.scale;
    console.log(scale);
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" || scale === "k"
        ? tryConvert(temperature, toCelsius)
        : temperature;
    const fahrenheit =
      scale === "c" || scale === "k"
        ? tryConvert(temperature, toFahrenheit)
        : temperature;
    const kelvin =
      scale === "c" || scale === "f"
        ? tryConvert(temperature, toKelvin)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
