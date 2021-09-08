`use strict`;

function FormatDate(props) {
    console.log(props);
  return <h2>It is, {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <FormatDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock date="mantap" />
      <Clock />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
