
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from 'react-router-dom';
import { Addtocart, getData } from '../Redux/Appreducer/action';
import "./MUltiCrousel.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiCrousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const notify = () => toast("Wow Item Added🎈🛒🛒✔!");
    const dispatch = useDispatch()
    const data = useSelector((store) => store.Appreducer?.product?.products)
    // console.log(data)

    // useEffect(()=>{
        
    // })
    useEffect(() => {
        dispatch(getData())
    }, [])
    // console.log(data)
    function SendDatatocart(value) {
        dispatch(Addtocart(value))
    }



    return (
        <>
            <div className='crouselmainbox'>
                <Carousel
                    transitionDuration={500}
                    // autoPlay={this.props.deviceType !== "desktop" ? true : false}
                    responsive={responsive}>

                    {

                         data.map((item) => {
                            return (
                                <div className='multicrousel'>
                                    <img className='img' src={item.thumbnail} alt="" />
                                    <p><strong>{item.title}</strong></p>
                                    <p>Price:-{item.price}</p>
                                    <button className='checkout' onClick={notify}>
                                        <button className='checkout' onClick={() => SendDatatocart(item)}>Add Cart</button>
                                    </button>

                                </div>
                            )
                        })
                    }

                </Carousel>;

            </div>
            <ToastContainer />

        </>
    )

}

export default MultiCrousel