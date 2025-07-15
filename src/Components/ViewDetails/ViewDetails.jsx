import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams(); // Get the ID parameter from the URL
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Fetch the art & craft item details based on its ID
    fetch(`https://creative-corner-server.vercel.app/craft/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch item details");
        }
        return response.json();
      })
      .then((data) => {
        setItemDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id]);

  return (
    <div className="mt-24 px-8">
      <h2 className="text-3xl font-bold mb-4">Art & Craft Item Details</h2>
      {itemDetails ? (
        <div className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-lg">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {itemDetails.itemName}
            </h3>
            <p className="text-gray-600 mb-4">
              Category: {itemDetails.subcategoryName}
            </p>
            <p className="text-gray-600 mb-4">
              Description: {itemDetails.shortDescription}
            </p>
            <p className="text-gray-600 mb-4">Price: {itemDetails.price}</p>
            <p className="text-gray-600 mb-4">Rating: {itemDetails.rating}</p>
            <p className="text-gray-600 mb-4">
              Stock Status: {itemDetails.stockStatus}
            </p>
            <p className="text-gray-600 mb-4">
              Processing Time: {itemDetails.processingTime}
            </p>
            <p className="text-gray-600 mb-4">
              User Email: {itemDetails.userEmail}
            </p>
            <p className="text-gray-600 mb-4">
              User Name: {itemDetails.userName}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewDetails;
