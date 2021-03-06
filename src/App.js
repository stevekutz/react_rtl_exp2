import React from 'react';
import Speaker from './Speaker';

class App extends React.Component {
  state = {
    message: 'nothing to say yet',
  }
  speak = () => {
    this.setState({
      message: "speak has been called !!!"
    })
  }
  
  render() {
    return (
      <div prop = "top div test prop" > 
          <section aria-labelledby = "KittensHeader">
            <label htmlFor="username">Username</label>
            <input id="username" alt="userInfo"/>
            <h2 id = "KitttensHeader">All about Kittens</h2>
            <p className = "content"> React elements use htmlFor</p>
          </section>

          <Speaker  message = {this.state.message} speak = {this.speak} />


          <div prop = "child div ">
            
            <form action="" method="get" className="formExp">
                <div className="formName">
                  <label htmlFor="fullName">Enter your name: </label>
                  <input type="text" name="fullName" id="fullName" required/>
                </div>

                <div className="formEmail">
                  <label htmlFor="email">Enter your email: </label>
                  <input type="email" name="email" id="email" required/>
                </div>

                <div className="formInput">
                  <input type="submit" value="Login"/>
                </div>
            </form>
          
          </div>


      </div>

    );
  }
}

export default App;
