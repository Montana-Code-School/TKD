import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyDjzkSWSOc8KAZyrefu8JdI58dG14dpPhU'};

class Gmap extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  render() {

    return (
      <Gmaps className={"featuredMap"}
        width={'1000px'}
        height={'400px'}
        lat={46.5081587}
        lng={-114.0967987}
        zoom={15}
        loadingMessage={'Saja Academy of Martial Arts'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={46.5081587}
          lng={-114.0967987}
          draggable={false}
           />
      </Gmaps>
    );
  }
};


export default Gmap;
