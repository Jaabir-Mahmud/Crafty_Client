import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CraftItemModal = ({ closeModal }) => {
  const loadedCraft = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: loadedCraft.image,
    itemName: loadedCraft.itemName,
    subcategoryName: loadedCraft.subcategoryName,
    shortDescription: loadedCraft.shortDescription,
    price: loadedCraft.price,
    rating: loadedCraft.rating,
    customization: loadedCraft.customization,
    processingTime: loadedCraft.processingTime,
    stockStatus: loadedCraft.stockStatus,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://creative-corner-server.vercel.app/updateCraftItem/${loadedCraft._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.modifiedCount > 0) {
        await Swal.fire({
          title: "Success",
          text: "Craft updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/my-art-craft-list");
        closeModal();
      } else {
        throw new Error("Failed to update craft item");
      }
    } catch (error) {
      console.error("Error:", error);
      await Swal.fire({
        icon: "error",
        title: "Failed to Update",
        text: "An error occurred while updating the craft item. Please try again later.",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Update Craft Item
              </h3>
              <div className="mt-5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6 bg-purple-50 rounded-md p-4">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Image
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full h-6 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50 rounded-md p-4">
                    <label
                      htmlFor="itemName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item Name
                    </label>
                    <input
                      type="text"
                      name="itemName"
                      id="itemName"
                      value={formData.itemName}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 h-6 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="subcategoryName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subcategory Name
                    </label>
                    <input
                      type="text"
                      name="subcategoryName"
                      id="subcategoryName"
                      value={formData.subcategoryName}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 h-6 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="shortDescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Short Description
                    </label>
                    <textarea
                      name="shortDescription"
                      id="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="rating"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rating
                    </label>
                    <input
                      type="number"
                      name="rating"
                      id="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="customization"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customization
                    </label>
                    <select
                      name="customization"
                      id="customization"
                      value={formData.customization}
                      onChange={handleChange}
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="processingTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Processing Time
                    </label>
                    <input
                      type="text"
                      name="processingTime"
                      id="processingTime"
                      value={formData.processingTime}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block bg-gray-100 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-6 bg-purple-50">
                    <label
                      htmlFor="stockStatus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stock Status
                    </label>
                    <select
                      name="stockStatus"
                      id="stockStatus"
                      value={formData.stockStatus}
                      onChange={handleChange}
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="In stock">In stock</option>
                      <option value="Made to Order">Made to Order</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemModal;
