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
    // this.timerID = setInterval(() => this.tick(), 1000);
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
        <h1>{this.props.title}</h1>
        <FormatDate date={this.state.date} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((item) => ({
      isToggleOn: !item.isToggleOn,
    }));
  }

  render() {
    console.log(this.state.isToggleOn);
    return (
      <div>
        <button type="submit" onClick={this.handleClick}>
          {this.state.isToggleOn ? `ON` : `OFF`}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Button />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
