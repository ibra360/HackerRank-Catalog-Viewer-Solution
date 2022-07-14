import React, { Fragment, useState } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);

  const [slideDuration] = useState(3000);

  // selectedCatalog(index) {
  //   setActiveIndex(index)
  //       this.setState({currentIndex: index, catalogSelected: catalogs[index]});
  //     }

  //     previousClick() {
  //       let previousIndex = this.state.currentIndex == 0 ? this.state.catalogs.length - 1 : parseInt(this.state.currentIndex)-1;
  //       this.setState({currentIndex: previousIndex, catalogSelected: this.state.catalogs[previousIndex]});
  //     }

  //     nextClick() {
  //       let nextIndex = this.state.currentIndex == this.state.catalogs.length -1 ? 0 : parseInt(this.state.currentIndex)+1;
  //       this.setState({currentIndex: nextIndex, catalogSelected: this.state.catalogs[nextIndex]});
  //     }

  function onNextClick() {
    console.log({ activeIndex });

    if (activeIndex == 3) {
      setActiveIndex(0);
    } else {
      console.log("ELSEE", activeIndex);
      setActiveIndex(activeIndex + 1);
    }
  }

  function slideChange(e) {
    // setSlideActive(!slideActive);
    if (e.target.checked) {
      let interval = setInterval(() => {
        console.log("MAI CHALALLLLLLLLLLLA");
        if (activeIndex == 3) {
          console.log("IF BLOCKKK", activeIndex);

          setActiveIndex(0);
        } else {
          console.log("ELSEE", activeIndex);
          setActiveIndex((activeIndex) => activeIndex + 1);
        }
        // onNextClick();
      }, slideDuration);
      setSlideTimer(interval);
    } else {
      console.log("MAI BAND HOGAYA");

      clearInterval(slideTimer);
    }

    // resetSlideTimer(!this.state.slideActive);
    // if (event.target.checked == true) {
    //   this.onSlideChange();
    // }
    // else if (this.state.slideInterval != '' && event.target.checked == false){
    //   clearInterval(this.state.slideInterval);
    // }
  }

  // function resetSlideTimer(isActive = false) {
  //   setSlideActive(isActive);
  //   // this.setState({slideActive: isActive});
  // }
  // onSlideChange() {
  //       let interval = setInterval ( () => {
  //                       this.nextClick()}, slideDuration);
  //       this.setState({slideInterval: interval});
  // }

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex]?.image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={() => {
                  if (activeIndex !== 0) {
                    setActiveIndex(activeIndex - 1);
                  } else {
                    setActiveIndex(catalogs.length - 1);
                  }
                }}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                setActiveIndex={setActiveIndex}
                currentIndex={activeIndex}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={() => onNextClick()}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onClick={(e) => {
              slideChange(e);
            }}
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

// import React, { Component, Fragment } from 'react';
// import previousIcon from './assets/icons/left-icon.png';
// import nextIcon from './assets/icons/right_icon.png';
// import thumb1 from './assets/images/thumb/tea-light-thumb.jpeg';
// import thumb2 from './assets/images/thumb/white-light-thumb.jpeg';
// import thumb3 from './assets/images/thumb/pink-light-thumb.jpeg';
// import thumb4 from './assets/images/thumb/tea-light-thumb.jpeg';
// import image1 from './assets/images/tea-light.jpeg';
// import image2 from './assets/images/white-light.jpeg';
// import image3 from './assets/images/pink-light.jpeg';
// import image4 from './assets/images/tea-light.jpeg';

// import './App.css';
// import Viewer from "./components/Viewer";
// import Thumbs from "./components/Thumbs";

// const catalogs = [
//   {
//     thumb: image1,
//     image: image1
//   },
//   {
//     thumb: image2,
//     image: image2
//   },
//   {
//     thumb: image3,
//     image: image3
//   },
//   {
//     thumb: image4,
//     image: image4
//   }
// ];

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Catalog Viewer',
//       catalogs: [...catalogs],
//       currentIndex: -1,
//       catalogSelected: catalogs[0],
//       slideActive: false,
//       slideTimer: null,
//       slideDuration: 3000,
//       slideInterval: '',
//     };
//     this.selectedCatalog = this.selectedCatalog.bind(this);
//     this.previousClick = this.previousClick.bind(this);
//     this.nextClick = this.nextClick.bind(this);
//     this.slideChange = this.slideChange.bind(this);
//     this.resetSlideTimer = this.resetSlideTimer.bind(this);
//     this.onSlideChange = this.onSlideChange.bind(this);
//   }

//   selectedCatalog(index) {
//     this.setState({currentIndex: index, catalogSelected: this.state.catalogs[index]});
//   }

//   previousClick() {
//     let previousIndex = this.state.currentIndex == 0 ? this.state.catalogs.length - 1 : parseInt(this.state.currentIndex)-1;
//     this.setState({currentIndex: previousIndex, catalogSelected: this.state.catalogs[previousIndex]});
//   }

//   nextClick() {
//     let nextIndex = this.state.currentIndex == this.state.catalogs.length -1 ? 0 : parseInt(this.state.currentIndex)+1;
//     this.setState({currentIndex: nextIndex, catalogSelected: this.state.catalogs[nextIndex]});
//   }

//   slideChange(event) {
//     this.resetSlideTimer(!this.state.slideActive);
//     if (event.target.checked == true) {
//       this.onSlideChange();
//     }
//     else if (this.state.slideInterval != '' && event.target.checked == false){
//       clearInterval(this.state.slideInterval);
//     }
//   }

//   resetSlideTimer(isActive = false) {
//     this.setState({slideActive: isActive});
//   }

//   onSlideChange() {
//     let interval = setInterval ( () => {
//                     this.nextClick()}, this.state.slideDuration);
//     this.setState({slideInterval: interval});
//   }
//   render() {
//     console.log(this.state.catalogSelected);
//     return (
//         <Fragment>
//           <div className="title" data-testid="app-title"> {this.state.title} </div>
//           <div className="catalog-outer">
//             <div className="catalog-view">
//               <div className="text-center">
//                 <div className="view-outter text-center">
//                   <Viewer catalog={this.state.catalogSelected?.image}/>
//                 </div>
//               </div>
//             </div>
//             <div className="catalog-items">
//               <div className="previous" onClick={this.previousClick} data-testid="prev-icon">
//                 <button
//               className="icon-only outlined"
//               data-testid="prev-slide-btn"
//             >
//               <i className="material-icons">arrow_back</i>
//             </button>
//               </div>
//               <div className="next" onClick={this.nextClick} data-testid="next-icon">
//                <button
//               className="icon-only outlined"
//               data-testid="next-slide-btn"
//             >
//               <i className="material-icons">arrow_forward</i>
//             </button>
//               </div>
//               <Thumbs items={this.state.catalogs} currentIndex={this.state.currentIndex} selectedCatalog={this.selectedCatalog}/>
//             </div>

//             <div className="slide-input">
//               <input type="checkbox" onChange={this.slideChange} className="test" data-testid="toggle-slide-show-button"/> Start Slide Show
//             </div>
//           </div>
//         </Fragment>
//     );
//   }
// }

// export default App;
