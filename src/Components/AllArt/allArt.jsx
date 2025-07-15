import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllArt = () => {
  const [craftItems, setCraftItems] = useState([]);

  // Beautiful arts and crafts images
  const featuredImages = [
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
    },
    {
      id: 13,
      url: "https://i.postimg.cc/sgJCmrxZ/indian-cotton-hand-block-fabric-floral-dressmaking-throw-fabric-handmade-craft-sewing-yard-HBCF-325.webp",
      title: "Hand Block Print Fabric",
      category: "Block Printing",
      description: "Traditional Indian cotton hand block printed fabric with floral patterns"
    },
    {
      id: 14,
      url: "https://i.postimg.cc/L8SMjX9p/khushi-handicraft-hand-block-print-pure-cotton-fabric-500x500.webp",
      title: "Pure Cotton Block Print",
      category: "Fabric Arts",
      description: "Handcrafted pure cotton fabric with traditional block printing techniques"
    },
    {
      id: 15,
      url: "https://i.postimg.cc/YSqKysLD/Learn-simple-hand-embroidery-techniques-for-linen-napkins-This-guide-covers-basic-stitches-and-tool.webp",
      title: "Hand Embroidery Techniques",
      category: "Embroidery",
      description: "Traditional hand embroidery techniques for linen and fabric decoration"
    },
    {
      id: 16,
      url: "https://i.postimg.cc/y6Sq59WK/pottery-couple-work.jpg",
      title: "Couple Pottery Workshop",
      category: "Pottery Classes",
      description: "Romantic pottery making session for couples learning together"
    },
    {
      id: 17,
      url: "https://i.postimg.cc/cHvqdtmQ/Quilled-flowers-sample-quilling-picture.jpg",
      title: "Quilled Flower Art",
      category: "Paper Quilling",
      description: "Intricate paper quilling technique creating beautiful floral designs"
    },
    {
      id: 18,
      url: "https://i.postimg.cc/zB6svDt4/s-l1200.jpg",
      title: "Craft Supply Collection",
      category: "Craft Supplies",
      description: "Complete collection of crafting supplies for various projects"
    },
    {
      id: 19,
      url: "https://i.postimg.cc/TP7M8Jrd/Screenshot-2024-10-03-at-10-55-05-AM.jpg",
      title: "Digital Craft Planning",
      category: "Digital Arts",
      description: "Modern digital tools for planning and designing craft projects"
    },
    {
      id: 20,
      url: "https://i.postimg.cc/sxWthFbx/Textiles-Hand-Embroidery.jpg",
      title: "Professional Hand Embroidery",
      category: "Professional Embroidery",
      description: "High-quality hand embroidery work on premium textile materials"
    },
    {
      id: 21,
      url: "https://i.postimg.cc/L8DGf3Qt/top-view-woman-making-wood-decorations.jpg",
      title: "Wood Decoration Making",
      category: "Wood Crafts",
      description: "Artisan creating beautiful wooden decorative items by hand"
    },
    {
      id: 22,
      url: "https://i.postimg.cc/dtPMK1Ty/valentines-day-fun-pack-activities-by-proud-to-be-primary-41.webp",
      title: "Valentine's Day Crafts",
      category: "Holiday Crafts",
      description: "Fun and creative Valentine's Day craft activities and projects"
    },
    {
      id: 23,
      url: "https://i.postimg.cc/sgstvNmf/Whiz-Kidz-Arts-and-Crafts-1.jpg",
      title: "Kids Arts and Crafts",
      category: "Children's Arts",
      description: "Engaging and educational arts and crafts activities for children"
    },
    {
      id: 24,
      url: "https://i.postimg.cc/V6rhxQfg/woman-craftmaster-pottery-shop.jpg",
      title: "Master Potter at Work",
      category: "Professional Pottery",
      description: "Skilled craftmaster creating pottery in a traditional pottery shop"
    }
  ];

  useEffect(() => {
    fetch("https://creative-corner-server.vercel.app/craft")
      .then((response) => response.json())
      .then((data) => {
        setCraftItems(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-800 dark:text-white mb-6 tracking-tight">
              All Art & Craft Items
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Explore our comprehensive collection of architectural designs, interior crafts, and artistic installations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">
              Featured Arts & Crafts Gallery
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
              Explore our comprehensive collection of handmade arts, crafts, and traditional techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {featuredImages.map((image) => (
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 font-normal leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Items Database Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 tracking-tight">
              All Craft Items Database
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
              Browse our complete collection of registered craft items
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold font-heading text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Item Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold font-heading text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold font-heading text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold font-heading text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {craftItems.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium font-heading text-gray-900 dark:text-gray-100">
                          {item.itemName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          ${item.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            {item.rating}
                          </span>
                          <span className="ml-1 text-yellow-400">★</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <Link
                          to={`/viewDetails/${item._id}`}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {craftItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">
                  No items found. Check back soon for new additions!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllArt;
