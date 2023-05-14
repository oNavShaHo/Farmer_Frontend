import Carousel from 'react-bootstrap/Carousel';
import M1 from './images/m1.png'
import M2 from './images/m2.jpg'
import M3 from './images/m3.png'
function DarkVariantExample() {
  return (
    <Carousel variant="dark" id="hf">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={M1.src}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Farmer yojna</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={M2.src}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={M3.src}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;