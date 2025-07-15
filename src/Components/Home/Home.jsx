import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    // Fetch normal cards for the homepage
    fetch("https://creative-corner-server.vercel.app/craft")
      .then((response) => response.json())
      .then((data) => setCards(data.slice(0, 6)))
      .catch((error) => console.error("Error fetching data:", error));

    // Fetch subcategories for the "Art & Craft Categories" section
    fetch("https://creative-corner-server.vercel.app/craft")
      .then((response) => response.json())
      .then((data) => {
        console.log("Raw subcategories data:", data); 
        const slicedData = data.slice(0, 6);
        console.log("Sliced subcategories data:", slicedData); 
        setSubcategories(slicedData);
      })
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  return (
    <div>
      <div className="mt-20 text-center lg:px-12 md:px-24 sm:px-24 px-24">
        <p className="text-3xl font-bold">Our Arts</p>
        <p className="mt-4 text-lg">
          Textile arts encompass a diverse range of creative expressions that
          involve the manipulation of fibers and fabrics to create functional or
          decorative objects.
        </p>
      </div>

      <div className="bg-gray-100 flex justify-center items-center mt-8 lg:px-24 md:px-8 sm:px-8 px-8 relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide className="text-center bg-white relative">
            <img
              className="rounded-3xl w-full h-full lg:w-auto lg:h-auto"
              src="img/image1.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base md:text-lg lg:text-xl bg-gray-800 bg-opacity-60 rounded-md">
                Textiles serve as a canvas for creativity, allowing artists to
                explore themes of identity, memory, storytelling, and social
                commentary.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white relative">
            <img
              className="rounded-3xl w-full h-full lg:w-auto lg:h-auto"
              src="img/image2.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base md:text-lg lg:text-xl bg-gray-800 bg-opacity-60 rounded-md">
                Textiles serve as a canvas for creativity, allowing artists to
                explore themes of identity, memory, storytelling, and social
                commentary.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white relative">
            <img
              className="rounded-3xl w-full h-full lg:w-auto lg:h-auto"
              src="img/image3.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base md:text-lg lg:text-xl bg-gray-800 bg-opacity-60 rounded-md">
                Textiles serve as a canvas for creativity, allowing artists to
                explore themes of identity, memory, storytelling, and social
                commentary.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white relative">
            <img
              className="rounded-3xl w-full h-full lg:w-auto lg:h-auto"
              src="img/image4.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base md:text-lg lg:text-xl bg-gray-800 bg-opacity-60 rounded-md">
                Textiles serve as a canvas for creativity, allowing artists to
                explore themes of identity, memory, storytelling, and social
                commentary.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white relative">
            <img
              className="rounded-3xl w-full h-full lg:w-auto lg:h-auto"
              src="img/image5.jpg"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base md:text-lg lg:text-xl bg-gray-800 bg-opacity-60 rounded-md">
                Textiles serve as a canvas for creativity, allowing artists to
                explore themes of identity, memory, storytelling, and social
                commentary.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Cards section */}

      <div className="homepage bg-gray-100 min-h-screen py-8 px-8 font-sans">
        <h1 className="text-3xl font-semibold text-center mb-8">Craft Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card._id}
              className="max-w-sm rounded-lg overflow-hidden shadow-xl"
            >
              <img
                className="w-full h-56 object-cover"
                src={card.image}
                alt={card.itemName}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.itemName}</div>
                <div className="font-semibold text-xl mb-2 text-blue-500 font-great-vibes">
                  # {card.subcategoryName}
                </div>

                <p className="text-gray-700 text-base">
                  {card.shortDescription}
                  <hr className="mt-2" />
                </p>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <p className="text-gray-700 text-base">
                      <span className="font-bold">Stock:</span>{" "}
                      {card.stockStatus}
                    </p>
                    <p className="text-gray-700 text-base">
                      <span className="font-bold">Rating:</span> {card.rating}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-2" />
              <div className="px-6 py-4 flex justify-between">
                <p className="text-gray-700 text-base font-bold">
                  Price: {card.price}
                </p>
                <Link
                  to={"/order"}
                  className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Another cards  */}
      {/* Art & Craft Categories section */}
      <div className="mt-8 px-8">
        <div className="text-2xl font-semibold text-center mb-4">
          Art & Craft Categories
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subcategories.map((subcategory) => (
            <div key={subcategory._id} className="relative">
              <img
                src={subcategory.image}
                alt={subcategory.subcategoryName}
                className="w-full h-40 object-cover rounded-lg shadow-md" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                <button className="text-white text-lg font-semibold">
                  {subcategory.subcategoryName}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer review */}

      <div className="mt-12 text-center text-3xl font-bold bg-gray-200 py-4">
        Customer Reviews
      </div>

      <div className="bg-gray-100 flex justify-center items-center mt-12 lg:px-24 md:px-8 sm:px-8 px-8 relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
          spaceBetween={50}
          slidesPerView={1}
        >
          {/* First set of reviews */}
          <SwiperSlide className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Fantastic craftsmanship and excellent service!"
                </p>
                <p className="text-gray-600">- John Doe</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Amazing collection and fast delivery!"
                </p>
                <p className="text-gray-600">- Jane Smith</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Highly recommend! Will definitely shop again!"
                </p>
                <p className="text-gray-600">- Michael Johnson</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Second set of reviews */}
          <SwiperSlide className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Beautiful craftsmanship and great attention to detail!"
                </p>
                <p className="text-gray-600">- Emily Brown</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Excellent quality and timely delivery!"
                </p>
                <p className="text-gray-600">- David Wilson</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Lovely products and friendly customer service!"
                </p>
                <p className="text-gray-600">- Sarah Taylor</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Third set of reviews */}
          <SwiperSlide className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Great selection of products and quick shipping!"
                </p>
                <p className="text-gray-600">- Christopher Clark</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Impressive craftsmanship and top-notch service!"
                </p>
                <p className="text-gray-600">- Olivia Martinez</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  "Absolutely love the items I ordered!"
                </p>
                <p className="text-gray-600">- William White</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
