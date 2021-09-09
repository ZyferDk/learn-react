`use strict`;

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  let listItems = numbers.map((number, index) => (
    <ListItem key={index} value={number} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

function Post(props) {
  return (
    <div >
      <h3>{props.content.title}</h3>
      <p>{props.content.content}</p>
    </div>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post, index) => (
    <Post key={index} content={post} />
  ));
  return (
    <div>
      {sidebar} <hr /> {content}
    </div>
  );
}

const numbers = [4, 5, 3, 2, 6, 3, 2, 4, 1, 2, 5, 3, 2];
// const numbers = [1, 2, 3, 4, 5];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function App() {
  return (
    <div>
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
