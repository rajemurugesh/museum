import React, {useState} from 'react'

const Dashboard = () => {
  const [userRole, setUserRole] = useState("admin1");

  const canUpdate = userRole === "admin1" || userRole === "admin2";
  const canDelete = userRole === "admin2";

  const handleUpdate = () => {
    if(canUpdate){
    //perform update action
    console.log("Updating Data...")
    setUserRole(userRole);
  } else {
    console.log("you don't have permission to update.")
    
  }
  };

  const handleDelete = () => {
    if(canDelete) {
      console.log("Deletring Data...")
      setUserRole(userRole);
    } else {
      console.log("you don't have permission to update.")
    }
  }
  return (
    <div>
        <h2>Welcome to the Admin DashBoard</h2>
        <button onClick={handleUpdate} disabled={!canUpdate}>
          Update Data
        </button>
        <button onClick={handleDelete} disabled={!canDelete}>
          Delete Data
        </button>
    </div>
  )
}

export default Dashboard