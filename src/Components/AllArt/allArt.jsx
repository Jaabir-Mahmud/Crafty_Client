import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllArt = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/craft")
      .then((response) => response.json())
      .then((data) => {
        setCraftItems(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto mt-24 px-8 rounded-2xl">
      <div className="bg-blue-400 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">All Art & Craft Items</h2>
        <div className="shadow-md overflow-hidden px-4 rounded-2xl">
          <table className="min-w-full bg-gray-100 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {craftItems.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{item.itemName}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.rating}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="inline-block bg-blue-500 text-white rounded-md py-1 px-2 w-24 text-center">
                      <Link
                        to={`/viewDetails/${item._id}`}
                        className="text-white hover:text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {craftItems.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">No items found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArt;
