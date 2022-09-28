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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      route: 'signin',
      isSignedIn: false
    }
  }


  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });


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
    this.setState({ route: route });
    if (route === 'home') {
      this.setState({ isSignedIn: true })
    } else this.setState({ isSignedIn: false })
  }


  render() {
    return (
      <div className="App" >
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageUrl={this.state.imgUrl} />
          </div>
          : (this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )

        }

      </div>
    );
  }
}

export default App;