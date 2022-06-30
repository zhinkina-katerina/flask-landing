import React, {Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper";


class Carousel extends Component{
    render() {
        const items = this.props.itemsForSlider
        return (
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
            {items.map((item, index)=>{
                return(
                    <SwiperSlide>{item} </SwiperSlide>
                )
            })}
            </Swiper>
        )
    }
}
export default Carousel