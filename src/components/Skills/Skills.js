import python from "../../assets/img/pyth.png";
import java from "../../assets/img/java.png";
import web from "../../assets/img/web.png";
import block from "../../assets/img/block.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import arrowIMG from "../../assets/img/bg/arrow.png"
import './Skills.css'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
        <div className="arrow">
          <img src={arrowIMG} alt="arrow" />
        
        </div>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in full-stack web development with expertise in HTML, CSS, JavaScript, Node.js, React.js, MongoDB, and Git. I specialize in creating responsive and visually appealing web applications, showcasing a problem-solving mindset and commitment to staying updated with industry trends.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={web} alt="webCircle" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="javaCircle" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="pythonCircle" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={block} alt="blockCircle" />
                                <h5>Blockchain</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills;