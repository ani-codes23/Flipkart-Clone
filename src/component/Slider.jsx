import Carousel from 'react-bootstrap/Carousel';

import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
function Slider() {
    return (
        <Carousel>
            <CarouselItem>
                <img className='slid' src='https://images.pexels.com/photos/19539371/pexels-photo-19539371/free-photo-of-young-fashionable-woman-standing-on-the-sidewalk-with-a-cup-of-coffee-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <CarouselCaption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img className='slid' src="https://images.pexels.com/photos/5312571/pexels-photo-5312571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <CarouselCaption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
            <img className='slid' src="https://images.pexels.com/photos/5312571/pexels-photo-5312571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <CarouselCaption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    );
}

export default Slider;