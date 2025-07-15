// Api.jsx

// Function to fetch the user's crafts from the backend
export const getMyCrafts = async (userId) => {
  try {
    const response = await fetch(
      `https://creative-corner-server.vercel.app/craft/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user crafts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user crafts:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

// Function to delete a craft item
export const deleteCraft = async (craftId) => {
  try {
    const response = await fetch(
      `https://creative-corner-server.vercel.app/craft/${craftId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete craft item");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting craft item:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};
