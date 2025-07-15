import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
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
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const artCraft = {
      image,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      stockStatus,
      processingTime,
      userEmail,
      userName,
    };
    console.log(artCraft);

    // Send data to the server
    fetch("https://creative-corner-server.vercel.app/addCraftItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Craft added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          // Redirect to MyArtCraftList route after successfully adding craft item
          history.push("/my-art-craft-list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error if needed
      });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md max-w-lg mx-auto mt-16">
      <h2 className="text-3xl mb-4 text-center">Add Craft Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="image" className="mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Image URL"
              value={formData.image}
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
          <div className="flex flex-col">
            <label htmlFor="userEmail" className="mb-2">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="User Email"
              value={formData.userEmail}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userName" className="mb-2">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Craft
        </button>
      </form>
    </div>
  );
};

export default AddCraftItem;
