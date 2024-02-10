import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerIMG from '../../assets/img/char/ch.GIF'
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Banner.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [ "Web Developer", "Web Designer", "Blockchain Dev" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text,delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
     
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
     
      setDelta(500);
    }  
  }

  return (
    <section className="banner" id="home">

      <Container>

        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} >
                  <img src={headerIMG} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Deepanshu`} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>Tech enthusiast with a genuine passion for learning. Always excited to dive into the latest tech trends and explore new possibilities. Eager to embrace the ever-evolving world of technology with a laid-back and inquisitive mindset.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility> 
    
          </Col>                                                                                            
        </Row>
      </Container>

    </section>
  )
}

export default Banner;