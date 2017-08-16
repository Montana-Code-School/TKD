import Header from './Header';
import Footer from './Footer';
import Info from '../pdf/info.pdf';
import Application from '../pdf/application.pdf';

export default class Resources extends React.Component {
  render (){
    return (
      <div className="container">
        {/* Navbar */}
        <Header />
        {/*Title image and text*/}
        <h1>RESOURCES</h1>
        {/*body*/}
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
        {/*Footer*/}
        <Footer />
      </div>
    )
  }
};

