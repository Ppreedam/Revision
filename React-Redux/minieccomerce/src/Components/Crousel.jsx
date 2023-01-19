import Carousel from 'react-bootstrap/Carousel';
import "./Crousel.css"

function Crousel() {
    
  return (
    <div className='crouselbox'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Deals-Desktop_149d42e2-bd86-4106-becd-674cc77ce61a_1600x.jpg?v=1673003529"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/we-banner-sharktank_2_9a61da5e-4113-4a94-b877-aeb7f16e7e72_1600x.jpg?v=1673003585"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smartwatch_web_banner_1600x.png?v=1671098678"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB1000-DESKTOP_a70ed48d-f6e5-4adc-b4ff-a939f6c4b9bd_1600x.jpg?v=1673010268"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Crousel;