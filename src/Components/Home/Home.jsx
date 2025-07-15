import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  // Beautiful arts and crafts images for featured gallery
  const featuredArchitecturalImages = [
    {
      id: 1,
      url: "https://i.postimg.cc/mrrJS1K0/02.jpg",
      title: "Traditional Pottery Making",
      category: "Pottery & Ceramics",
      description: "Handcrafted pottery with traditional techniques and modern aesthetics"
    },
    {
      id: 2,
      url: "https://i.postimg.cc/LXXCzdgR/1777be3e34a198160a3a5de6aa4d74b3.jpg",
      title: "Colorful Paper Crafts",
      category: "Paper Arts",
      description: "Vibrant paper craft projects with intricate folding and cutting techniques"
    },
    {
      id: 3,
      url: "https://i.postimg.cc/d0JSVZqh/550px-nowatermark-Make-Arts-and-Crafts-Step-1.jpg",
      title: "Arts and Crafts Workshop",
      category: "Mixed Media",
      description: "Creative workspace setup for various arts and crafts projects"
    },
    {
      id: 4,
      url: "https://i.postimg.cc/FH5Bwn8g/5d9edb4ccf0008a69f1d832f136ebe21.jpg",
      title: "Handmade Floral Arrangements",
      category: "Floral Arts",
      description: "Beautiful handcrafted floral designs and botanical arrangements"
    },
    {
      id: 5,
      url: "https://i.postimg.cc/mgY54yGx/7f5161f1cc30cdbfd783c627e5dd915e.jpg",
      title: "Creative Art Supplies",
      category: "Art Materials",
      description: "Professional art supplies arranged for creative projects and inspiration"
    },
    {
      id: 6,
      url: "https://i.postimg.cc/zXKrLW17/diy-garden-suncatcher-wind-chime-a-summer-kids-craft-4-67f3ee6dd521d.avif",
      title: "DIY Garden Suncatcher",
      category: "Garden Crafts",
      description: "Colorful DIY suncatcher wind chime perfect for summer garden decoration"
    },
    {
      id: 7,
      url: "https://i.postimg.cc/Vs3wLg25/images.jpg",
      title: "Traditional Handicrafts",
      category: "Traditional Arts",
      description: "Classic handicraft techniques passed down through generations"
    },
    {
      id: 8,
      url: "https://i.postimg.cc/3w9f4rRn/images-1.jpg",
      title: "Modern Craft Techniques",
      category: "Contemporary Arts",
      description: "Innovative approaches to traditional crafting methods"
    },
    {
      id: 9,
      url: "https://i.postimg.cc/nzPd2dqm/images-2.jpg",
      title: "Artisan Workshop",
      category: "Workshop Arts",
      description: "Professional artisan workspace with tools and materials"
    },
    {
      id: 10,
      url: "https://i.postimg.cc/7hJKWgNW/images-3.jpg",
      title: "Creative Design Process",
      category: "Design Arts",
      description: "Behind the scenes of the creative design and making process"
    },
    {
      id: 11,
      url: "https://i.postimg.cc/HjG6DVZs/images-4.jpg",
      title: "Handmade Decorations",
      category: "Home Decor",
      description: "Beautiful handcrafted decorative items for home styling"
    },
    {
      id: 12,
      url: "https://i.postimg.cc/667wXgjD/images-5.jpg",
      title: "Textile Arts Collection",
      category: "Textile Arts",
      description: "Diverse collection of textile arts and fabric crafts"
    }
  ];

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
        const slicedData = data.slice(0, 6);
        setSubcategories(slicedData);
      })
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-heading bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              Our Arts
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-normal tracking-wide max-w-3xl mx-auto">
              Textile arts encompass a diverse range of creative expressions that
              involve the manipulation of fibers and fabrics to create functional or
              decorative objects that inspire and captivate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/allArt"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 tracking-wide"
              >
                Explore Gallery
              </Link>
              <Link
                to="/addCraftItem"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 tracking-wide"
              >
                Create Art
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">Featured Gallery</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">Discover our most captivating arts and crafts creations</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {featuredArchitecturalImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Enhanced dark overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="mb-3">
                        <span className="inline-block px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full shadow-lg border border-white/20">
                          {image.category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white drop-shadow-2xl text-shadow-lg">
                        {image.title}
                      </h3>
                      <p className="text-lg font-normal leading-relaxed text-white/95 drop-shadow-lg text-shadow-md max-w-2xl">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Arts & Crafts Showcase Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">
              Arts & Crafts Showcase
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
              Explore traditional and modern crafting techniques from talented artisans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredArchitecturalImages.slice(0, 6).map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-gray-800 dark:text-white mb-2">{image.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/allArt"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              View All Arts & Crafts
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Craft Items */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">Featured Craft Items</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">Handpicked selections from our artisan community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card) => (
              <div
                key={card._id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.itemName}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {card.subcategoryName}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white text-sm font-semibold">{card.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {card.itemName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {card.shortDescription}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      card.stockStatus === 'In stock' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {card.stockStatus}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${card.price}
                    </span>
                  </div>
                  
                  <Link
                    to="/order"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art & Craft Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">Art & Craft Categories</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">Explore different categories of artistic expression</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subcategories.map((subcategory) => (
              <div
                key={subcategory._id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={subcategory.image}
                  alt={subcategory.subcategoryName}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4 transform group-hover:scale-110 transition-transform duration-300">
                    {subcategory.subcategoryName}
                  </h3>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Explore Category
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arts & Crafts Categories */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">
              Craft Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
              Discover various crafting specializations and traditional art forms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { 
                name: "Pottery & Ceramics", 
                count: "25+ Projects", 
                color: "from-amber-500 to-orange-500",
                thumbnail: "https://i.postimg.cc/mrrJS1K0/02.jpg",
                description: "Traditional and modern pottery techniques"
              },
              { 
                name: "Paper Arts", 
                count: "30+ Projects", 
                color: "from-blue-500 to-cyan-500",
                thumbnail: "https://i.postimg.cc/LXXCzdgR/1777be3e34a198160a3a5de6aa4d74b3.jpg",
                description: "Creative paper crafts and origami"
              },
              { 
                name: "Textile Arts", 
                count: "35+ Projects", 
                color: "from-purple-500 to-pink-500",
                thumbnail: "https://i.postimg.cc/sgJCmrxZ/indian-cotton-hand-block-fabric-floral-dressmaking-throw-fabric-handmade-craft-sewing-yard-HBCF-325.webp",
                description: "Fabric arts and textile crafting"
              },
              { 
                name: "Wood Crafts", 
                count: "20+ Projects", 
                color: "from-green-500 to-teal-500",
                thumbnail: "https://i.postimg.cc/L8DGf3Qt/top-view-woman-making-wood-decorations.jpg",
                description: "Handmade wooden decorations and crafts"
              },
              { 
                name: "Embroidery", 
                count: "28+ Projects", 
                color: "from-rose-500 to-pink-500",
                thumbnail: "https://i.postimg.cc/YSqKysLD/Learn-simple-hand-embroidery-techniques-for-linen-napkins-This-guide-covers-basic-stitches-and-tool.webp",
                description: "Traditional and modern embroidery work"
              },
              { 
                name: "Block Printing", 
                count: "15+ Projects", 
                color: "from-indigo-500 to-purple-500",
                thumbnail: "https://i.postimg.cc/L8SMjX9p/khushi-handicraft-hand-block-print-pure-cotton-fabric-500x500.webp",
                description: "Hand block printing on various materials"
              },
              { 
                name: "Children's Arts", 
                count: "22+ Projects", 
                color: "from-yellow-500 to-orange-500",
                thumbnail: "https://i.postimg.cc/sgstvNmf/Whiz-Kidz-Arts-and-Crafts-1.jpg",
                description: "Fun and educational kids craft activities"
              },
              { 
                name: "Holiday Crafts", 
                count: "18+ Projects", 
                color: "from-red-500 to-pink-500",
                thumbnail: "https://i.postimg.cc/dtPMK1Ty/valentines-day-fun-pack-activities-by-proud-to-be-primary-41.webp",
                description: "Seasonal and holiday-themed crafts"
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Thumbnail Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={category.thumbnail}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                      {category.count}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold font-heading mb-1 drop-shadow-lg">{category.name}</h3>
                    <p className="text-sm opacity-90 leading-relaxed drop-shadow-md">{category.description}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Explore {category.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Crafty?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes our platform the perfect place for artists and craft enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Creative Inspiration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get inspired by thousands of unique designs and creative ideas from artists worldwide.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Affordable Prices</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quality handcrafted items at competitive prices, making art accessible to everyone.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Handmade with Love</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each piece is carefully crafted by passionate artists who put their heart into their work.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick and secure shipping to get your favorite crafts delivered right to your doorstep.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a vibrant community of artists and craft lovers sharing knowledge and passion.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We stand behind every product with our quality guarantee and hassle-free returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Artists</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Meet the talented creators behind our beautiful crafts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Chen", specialty: "Textile Art", avatar: "SC", works: 45, rating: 4.9 },
              { name: "Miguel Rodriguez", specialty: "Ceramics", avatar: "MR", works: 32, rating: 4.8 },
              { name: "Aisha Patel", specialty: "Jewelry", avatar: "AP", works: 67, rating: 5.0 },
              { name: "Emma Thompson", specialty: "Woodwork", avatar: "ET", works: 28, rating: 4.7 }
            ].map((artist, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {artist.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{artist.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{artist.specialty}</p>
                <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{artist.works} works</span>
                  <span>⭐ {artist.rating}</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl opacity-90">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Artists</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-xl opacity-90">Unique Items</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Subscribe to our newsletter and get the latest updates on new arrivals, exclusive offers, and artist spotlights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Real experiences from our valued community</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {[
                { name: "John Doe", review: "Fantastic craftsmanship and excellent service!", rating: 5 },
                { name: "Jane Smith", review: "Amazing collection and fast delivery!", rating: 5 },
                { name: "Michael Johnson", review: "Highly recommend! Will definitely shop again!", rating: 5 },
                { name: "Emily Brown", review: "Beautiful craftsmanship and great attention to detail!", rating: 5 },
                { name: "David Wilson", review: "Excellent quality and timely delivery!", rating: 5 },
                { name: "Sarah Taylor", review: "Lovely products and friendly customer service!", rating: 5 }
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of artists and craft enthusiasts. Share your creations and discover inspiring works from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Our Community
            </Link>
            <Link
              to="/allArt"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
