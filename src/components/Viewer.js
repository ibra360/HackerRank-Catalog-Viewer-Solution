import React from 'react'

function Viewer({ catalogImage }) {
  return (
    <div className='layout-row justify-content-center'>
      <img 
        alt='catalog-view' 
        className='w-75' 
        src={catalogImage}
        data-testid='catalog-view' 
      />
    </div>
  )
}

export default Viewer

// import React, { Component } from 'react';
// import './Viewer.css';

// class Viewer extends Component {

//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//         <div className="catalog-view">
//           <img data-testid="catalog-view" className="catalog-image" src={this.props.catalog}/>
//         </div>
//     );
//   }
// }

// export default Viewer;