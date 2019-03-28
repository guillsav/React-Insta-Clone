import React from 'react';

class LoginPage extends React.Component {
  onButtonClick = e => {
    if (
      this.props.username === this.props.user &&
      this.props.password === this.props.pass
    ) {
      const username = JSON.stringify(this.props.username);
      const password = JSON.stringify(this.props.pass);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      this.forceUpdate(() => <LoginPage />);
    }
  };

  render() {
    return (
      <div className="Login">
        <form>
          <input
            onChange={this.props.onChange}
            required
            type="text"
            name="username"
            value={this.props.username}
          />
          <input
            onChange={this.props.onChange}
            required
            type="text"
            name="password"
            value={this.props.password}
          />
          <button onClick={this.onButtonClick}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
