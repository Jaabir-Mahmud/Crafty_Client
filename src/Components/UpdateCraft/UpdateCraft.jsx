import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"; // Import useNavigate hook
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const loadedCraft = useLoaderData();
  console.log(loadedCraft);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    subcategoryName: "",
    shortDescription: "",
    price: "",
    rating: "",
    stockStatus: "",
    processingTime: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stockStatus = form.stockStatus.value;
    const processingTime = form.processingTime.value;

    const artCraft = {
      image,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      stockStatus,
      processingTime,
    };
    console.log(artCraft);

    // Send data to the server
    fetch(
      `https://creative-corner-server.vercel.app/updateCraftItem/${loadedCraft._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artCraft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Craft added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });

          history.push("/my-art-craft-list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md max-w-lg mx-auto">
      <h2 className="text-3xl mb-4 text-center">Update Craft Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="image" className="mb-2">
              Image URL
            </label>
            <input
              type="text"
              defaultValue={loadedCraft.image}
              name="image"
              id="image"
              placeholder="Image URL"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="itemName" className="mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              id="itemName"
              placeholder="Item Name"
              value={formData.itemName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subcategoryName" className="mb-2">
              Subcategory Name
            </label>
            <input
              type="text"
              name="subcategoryName"
              id="subcategoryName"
              placeholder="Subcategory Name"
              value={formData.subcategoryName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="shortDescription" className="mb-2">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              id="shortDescription"
              placeholder="Short Description"
              value={formData.shortDescription}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="mb-2">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stockStatus" className="mb-2">
              Stock Status
            </label>
            <input
              type="text"
              name="stockStatus"
              id="stockStatus"
              placeholder="Stock Status"
              value={formData.stockStatus}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="processingTime" className="mb-2">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              id="processingTime"
              placeholder="Processing Time"
              value={formData.processingTime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update Craft
        </button>
      </form>
    </div>
  );
};

export default UpdateCraft;
