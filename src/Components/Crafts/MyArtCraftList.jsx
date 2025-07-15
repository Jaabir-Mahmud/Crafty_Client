import { useState, useEffect } from "react";
import CraftItemModal from "../../Components/Modal/CraftItemModal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArtCraftList = () => {
  const [craftItems, setCraftItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [selectedCraftItem, setSelectedCraftItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCraftItems();
  }, []);

  const fetchCraftItems = async () => {
    try {
      const response = await fetch(
        "https://creative-corner-server.vercel.app/craft"
      );
      if (response.ok) {
        const data = await response.json();
        setCraftItems(data);
      } else {
        setError("Failed to fetch craft items");
      }
    } catch (error) {
      setError("Error fetching craft items");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleUpdateCraftItem = (updatedCraftItem) => {
    // Logic to update the craft item in the database goes here
    console.log("Updated craft item:", updatedCraftItem);
    // Close the modal after updating
    closeModal();
  };

  const openModal = (craftItem) => {
    setSelectedCraftItem(craftItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteCraftItem = async (craftItemId) => {
    console.log(craftItemId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://creative-corner-server.vercel.app/craft/${craftItemId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting craft item:", error);
            Swal.fire({
              icon: "error",
              title: "Failed to Delete",
              text: "An error occurred while deleting the craft item. Please try again later.",
            });
          });
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredCraftItems =
    filter === "all"
      ? craftItems
      : craftItems.filter((item) => item.customization === filter);

  return (
    <div>
      <h2 className="text-3xl mb-4 text-center bg-gray-200 py-2 px-4">
        Craft List is here
      </h2>

      {/* Filter dropdown */}
      <select
        value={filter}
        onChange={handleFilterChange}
        className="mb-4 float-right bg-blue-100 rounded-md px-3 py-1"
      >
        <option value="all">All</option>
        <option value="yes">Customization: Yes</option>
        <option value="no">Customization: No</option>
      </select>

      {/* Display craft items */}
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {filteredCraftItems.map((craftItem, index) => (
            <div
              key={index}
              className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
              style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={craftItem.image}
                  className="rounded-t-lg"
                  style={{ width: "100%", height: "200px" }}
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {craftItem.itemName}
                </h5>

                <div className="mb-4 flex flex-col">
                  <p className="mb-4 text-base">
                    <span className="font-bold">Price:</span> {craftItem.price}
                    <br />
                    <span className="font-bold">Rating:</span>{" "}
                    {craftItem.rating}
                    <br />
                    <span className="font-bold">Stock Status:</span>{" "}
                    {craftItem.stockStatus}
                  </p>

                  <form className="max-w-xs">
                    <label className="  text-sm font-medium text-gray-900 dark:text-white"></label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Customization</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </form>
                </div>

                <div className="flex justify-between">
                  <Link to={`/update/${craftItem._id}`}>
                    <button className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                      Update
                    </button>
                  </Link>
                  <button
                    className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-primary-2 focus:bg-red-600 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    onClick={() => deleteCraftItem(craftItem._id)} // Delete craft item
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Render CraftItemModal component conditionally */}
        {isModalOpen && (
          <CraftItemModal
            craftItem={selectedCraftItem}
            closeModal={closeModal}
            onUpdateCraftItem={handleUpdateCraftItem}
          />
        )}
      </div>
    </div>
  );
};

export default MyArtCraftList;
