// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Client = () => {
  return (
    <>
      <div className="container_swiper" id="client">
        <h1>Happy Clients</h1>
        {/* swiper code start from here */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper Main_swiper"
        >
          <SwiperSlide className="item">
            <img
              src="img/profile1.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <h3>lor jency</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit?
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore
            nam quaerat dolorem debitis excepturi impedit perspiciatis
            reiciendis quidem consectetur?
          </SwiperSlide>
          <SwiperSlide className="item">
            <img
              src="img/profile2.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt=""
            />
            <h3>Addison lary</h3>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero labore nam quaerat dolorem debitis excepturi impedit
              perspiciatis reiciendis quidem consectetur?
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <img
              src="img/profile3.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt=""
            />
            <h3>Lillian handry</h3>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero labore nam quaerat dolorem debitis excepturi impedit
              perspiciatis reiciendis quidem consectetur?
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <img
              src="img/profile4.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt=""
            />
            <h3>John candry</h3>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero labore nam quaerat dolorem debitis excepturi impedit
              perspiciatis reiciendis quidem consectetur?
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <img
              src="img/profile5.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt=""
            />
            <h3>Tom harry</h3>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero labore nam quaerat dolorem debitis excepturi impedit
              perspiciatis reiciendis quidem consectetur?
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <img
              src="img/profile6.jpg"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt=""
            />
            <h3>Marry jain</h3>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              iusto, explicabo aut eligendi fuga, eos harum nulla earum dolor
              cum saepe. Impedit atque nesciunt repellendus facilis magni fuga
              ducimus odit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero labore nam quaerat dolorem debitis excepturi impedit
              perspiciatis reiciendis quidem consectetur?
            </p>
          </SwiperSlide>

          <div className="blur"></div>
          <div className="blur1"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Client;
