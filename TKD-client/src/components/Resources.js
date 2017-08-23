import Header from './Header';
import React from 'react';
import Footer from './Footer';
import Info from '../pdf/info.pdf';
import Application from '../pdf/application.pdf';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>RESOURCES</h1>
        <div>
          <p>DOWNLOAD INFORMATION</p><br/>
          <div>
            <iframe className="pdfs" src={Info} width="100%" height="480" />
          </div>
        </div>
        <div>
          <p>DOWNLOAD APPLICATION</p><br/>
          <div>
            <iframe className="pdfs" src={Application} width="100%" height="480" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
