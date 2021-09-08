`use strict`;
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginIn: false, showWarning: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoginIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoginIn: false });
  }

  render() {
    const isLoginIn = this.state.isLoginIn;
    let button;

    // if (isLoginIn) {
    //   button = <button onClick={this.handleLogoutClick}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handleLoginClick}>Login</button>;
    // }
    {
      isLoginIn
        ? (button = <button onClick={this.handleLogoutClick}>Logout</button>)
        : (button = (
            <div>
              <WarningBanner warn={this.state.showWarning} />
              <button onClick={this.handleLoginClick}>Login</button>
            </div>
          ));
    }

    return (
      <div>
        <Greeting isLoginIn={isLoginIn} />

        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
      <GuestGreeting />
    </div>
  );
}

function UserGreeting(props) {
  return <h1>Welcome brother</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in</h1>;
}

function Greeting(props) {
  const isLoginIn = props.isLoginIn;
  if (isLoginIn) {
    return (
      <div>
        <UserGreeting />
        <MailBox unreadMessages={message} />
      </div>
    );
  } else {
    return (
      <div>
        <GuestGreeting />
      </div>
    );
  }
}

function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 && (
        <h2>You Have {unreadMessages.length} unread Messages</h2>
      )}
    </div>
  );
}

const message = ["react", "re:react", "re:re:react"];

function App() {
  return (
    <div>
      <LoginControl />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
