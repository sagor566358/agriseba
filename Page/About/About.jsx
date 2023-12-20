// import React from 'react';

        import '../About/about.css'
        import logo1 from '../About/earth.png';
        import logo2 from '../About/open-book.png';
        import logo3 from '../About/pen.png';
import Footer from '../Home/Foter/Footer';



const About = () => 
{
    return (
        <div>
        <section id="about">
        <div className="about-1">
            <h1 className="aboutus">About US</h1>
            <p className='goal'>The goal of this project is to sustainably raise smallholder farmers' productivity through improved water resources and integrated agricultural production. The project is national in scope, covering a total estimated area of 1.2 million hectares.</p>
        </div>
        <div id="about-2">
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-item text-center">
                                <img  className="log" src={logo1}></img>
                                <h3 className='mission'>Mission</h3>
                                <hr/>
                                <p className='most'>The most valued organization in increasing agricultural productivity ethically.
                                    SO Poor people can't  stay hungry at night  </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-item text-center">
                                <img  className="log" src={logo2}></img>
                                <h3  className='mission'>Vission</h3>
                                <hr/>
                                <p className='most'>To promote the interests of farming by providing them with necessary support services,
                                 facilities and incentives to encourage their contributions in making the business of 
                                 agriculture viable, in a socially responsible manner.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-item text-center">
                            <img  className="log"src={logo3}></img>
                                <h3  className='mission'>Achievements</h3>
                                <hr/>
                                <p className='most'>1. We are hopeful that through this project, the farmers' work will be reduced.
                                2. They can easily rent or buy agricultural machinery from home online.
                               3. Contact the dealers to get an idea about the required pesticides and fertilizers. Can buy if necessary..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <Footer></Footer>
    </div>
     
    );
};

export default About;