import React, {Component} from 'react';
import axios from 'axios';
import icon from '../../img/icon-128.png';
import Header from './header';
import { hot } from 'react-hot-loader';

const API_URL = process.env.API_URL;

const mainStyle = {
  width: '300px',
  height: '500px',
  display: 'flex',
  flexDirection: 'column'
};

const errorStyle = {
  textAlign: 'center',
  fontSize: '16px',
  color: 'red'
}

class Greeting extends Component {
  state = {
    user: {},
    lists: {},
    isLoggedIn: false,
    error: null
  }

  componentDidMount() {
    this.getUserState();
  }

  getUserState() {
    axios.get(`${API_URL}/auth/me`)
      .then(res => {
          this.setState({
            user: res.data
          });
          if (res.data.id) {
            this.getUserLists(res.data.id);
            this.setState({ isLoggedIn: true })
          }
      }).catch(error => {
          this.setState({ error })
      });
  }

  getUserLists(userId) {
    axios.get(`${API_URL}/api/list/all`, { params: { userId } })
      .then(res => {
        this.setState({
          lists: res.data
        });
      })
  }

  render () {
    const listsArray = this.state.lists;
    return (
      <div style={mainStyle}>

      <Header />

      {/* <img src={icon} /> */}

        <div>
          {this.state.isLoggedIn ? (
            <div>
              <h1>Hello, {this.state.user.name}!</h1>

              { listsArray.length > 0 &&
                  <ul>
                    {
                      listsArray.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                      })
                    }
                  </ul>
              }
            </div>
          ) : (
            <div>
              <h3>Please login at the Manage Gifts site at <a href={API_URL}> {API_URL}</a>.</h3>
            </div>
          )}
        </div>

        {this.state.error &&
          <div style={errorStyle}>
            <h3>{this.state.error}</h3>
          </div>
        }

      </div>
    )
  }
}

export default hot(module)(Greeting)
