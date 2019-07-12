import React from 'react';


class App extends React.Component {
  render() {
    return (
      <section aria-labelledby = "KittensHeader">
        <label htmlFor="username">Username</label>
        <input id="username" />
        <h2 id = "KitttensHeader">All about Kittens</h2>
        <p className = "content"> Lorem ipsum dolor sit amet</p>
      </section>
    );
  }
}

export default App;
