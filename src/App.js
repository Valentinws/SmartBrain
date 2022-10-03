import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/Signin/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg'
import { Component } from 'react';
// import Clarifai from 'clarifai';


// const app = new Clarifai.App({
//   apiKey: "13ad5c4f763a44c8bb49f26438d33611"
// });
const initialState = {
  input: '',
  imgUrl: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }


  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.user.id,
      })
    })
      .then(response => response.json())
      .then(entriesr => {
        this.setState(Object.assign(this.state.user, { entries: entriesr }))
      })
    Object.assign()



    // app.models.predict(
    //   "13ad5c4f763a44c8bb49f26438d33611",
    //   "https://samples.clarifai.com/face-det.jpg"
    // ).then(
    //   function (response) {
    //     console.log(response);
    //   },
    //   function (err) {

    //   }
    // );

  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  loadUser = (userr) => {
    this.setState({
      user: {
        id: userr.id,
        name: userr.name,
        email: userr.email,
        entries: userr.entries,
        joined: userr.joined
      }
    }
    )
  }

  render() {
    return (
      <div className="App" >
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageUrl={this.state.imgUrl} />
          </div>
          : (this.state.route === 'signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )

        }

      </div>
    );
  }
}

export default App;