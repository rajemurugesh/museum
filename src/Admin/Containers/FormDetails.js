import React, { useState, useEffect } from "react";
import axios from "axios";

const FormDetails = ({ adminType }) => {
  const canAdd = adminType === "admin1" || adminType === "admin2";
  const canUpdate = adminType === "admin1" || adminType === "admin2";
  const canDelete = adminType === "admin2";

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [action, setAction] = useState("add");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    if (!canAdd) {
      alert("Access denied");
      return;
    }
    console.log("Attempting to add item...");

 try {
      // Replace this with your actual API endpoint
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "New Post Title",
        body: "New Post Body",
   
      });

      // Assuming response.data is the newly added item
      setData([...data, response.data]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  

  const handleUpdate = async () => {
    if (!canUpdate) {
      alert("Access denied");
      return;
    }
console.log("Attempting to update item...")
   try {
      // Replace this with your actual API endpoint and selected item's ID
      const updateUrl = `https://jsonplaceholder.typicode.com/posts/${selectedItem.id}`;

      // Replace this with the updated values
      const updatedItem = {
        title: "Updated Title",
        body: "Updated Body",
      };

      const response = await axios.put(updateUrl, updatedItem);

      // Update the data array with the updated item
      setData((prevData) => prevData.map(item => item.id === selectedItem.id ? response.data : item));
    } catch (error) {
      console.error("Error updating item:", error);
    }
};


  const handleDelete = async (itemId) => {
    if (!canDelete) {
      alert("Access denied");
      return;
    }

    try {
      // Replace this with your actual API endpoint for deleting by ID
      const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${itemId}`;

      await axios.delete(deleteUrl);

      // Remove the deleted item from the data array
      setData((prevData) => prevData.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


  const handleEdit = (item) => {
    console.log("Edit button clicked for item:", item); 
    setSelectedItem(item);
    setAction("edit");
  };

  return (
    <div>
      <h2>Form Details</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)} disabled={!canDelete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {action === "edit" && (
          <div>
            <h3>Edit Item</h3>
            {/* Render edit form */}
            <button onClick={handleUpdate} disabled={!canUpdate}>
              Update
            </button>
          </div>
        )}
        {action === "add" && (
          <div>
            <h3>Add Item</h3>
            {/* Render add form */}
            <button onClick={handleAdd} disabled={!canAdd}>
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDetails;
