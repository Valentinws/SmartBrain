import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import { Component } from 'react';
// import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


// const app = new Clarifai.App({
//   apiKey: "13ad5c4f763a44c8bb49f26438d33611"
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: ''
    }
  }


  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    console.log(this.state.imgUrl);

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

  render() {
    return (
      <div className="App" >
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
