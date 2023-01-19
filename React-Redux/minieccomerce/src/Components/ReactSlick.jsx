import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Appreducer/action";
import "./MUltiCrousel.css"

const ReactSlick = () => {
    const dispatch =useDispatch()
    const data = useSelector((store) => store.Appreducer?.product?.products)
    // console.log(data)

    useEffect(() => {
        dispatch(getData())
    }, [])
    // console.log(data)

    const crouseldata = data && data.map((item) => {
        return (
            <div className='multicrousel'>
                <img className='img' src={item.thumbnail} alt="" />
                <p><strong>{item.title}</strong></p>
                <p>Price:-{item.price}</p>
                {/* <button className='checkout' onClick={notify}>
                    <button className='checkout' onClick={() => SendDatatocart(item)}>Add Cart</button>
                </button> */}

            </div>
        )
    })
    console.log(crouseldata)
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
        <div>
            <Carousel responsive={responsive}>
                <div>
                {crouseldata}
                </div>
            
            </Carousel>;
        </div>
    )
}

export default ReactSlick