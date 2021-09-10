`use strict`;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      address: "",
      area: "",
      pilih: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleArea = this.handleArea.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      `A name was submitted ${this.state.value} and ${this.state.address} ${this.state.area} ${this.state.pilih}`
    );
  }

  handleName(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleAddress(e) {
    e.preventDefault();
    this.setState({ address: e.target.value });
  }

  handleArea(e) {
    this.setState({ area: e.target.value });
  }
  handleSelect(e) {
    this.setState({ pilih: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleName}
        />
        <br />
        <label>Address : </label>
        <input
          type="text"
          value={this.state.address}
          onChange={this.handleAddress}
        />
        <br />
        <label>Ara : </label>
        <textarea value={this.state.area} onChange={this.handleArea} />
        <br />
        <label>
          Pick your favorite flavor:
          <select value={this.state.pilih} onChange={this.handleSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
