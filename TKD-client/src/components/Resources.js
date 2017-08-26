import Header from './Header';
import React from 'react';
import Footer from './Footer';
import Info from '../pdf/info.pdf';
import Application from '../pdf/application.pdf';
import resources from '../styles/Resources.css';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>RESOURCES</h1>
        <div>
         <p>DOWNLOAD APPLICATION</p><br/>
          <div className="pdf">
           <div className="tableOfContents">
            <ol>
              <li>AJF Application for Membership</li>
              <li>Waiver and Release</li>
              <li>AJF Promotional Test Application</li>
              <li>Black Belt Examination Application</li>
            </ol>
          </div>
            <iframe className="pdfs" src={Application} width="45%" height="700" />
          </div>
          <div>
            <p>DOWNLOAD INFORMATION</p><br/>
            <div className="pdf">
              <div className="tableOfContents">
                <ol>
                  <li>Basic Terminology & Frequently Asked Questions</li>
                  <li>AJF Advanced Terminology</li>
                  <li>Basic Punching, Blocking, Kicking</li>
                  <li>One Step Sparring</li>
                  <li>Self Defense Forms</li>
                  <li>Self Defense Techniques (Hapkido)</li>
                  <li>American Kyuki-Do Federation</li>
                  <li>Tae Kwon Do Belt Testing Requirements</li>
                  <li>Etiquette</li>
                  <li>Verses</li>

                </ol>
              </div>
              <iframe className="pdfs" src={Info} width="45%" height="700" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
