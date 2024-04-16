import React, { useState, useEffect } from 'react';
import { getAllData, patchData } from '../../utils/CrudApi';
import '../../styles/admin.css';

// Admin Page Component
const AdminPage = () => {
  const [responses, setResponses] = useState([]); // State for responses data
  const [selectedMessage, setSelectedMessage] = useState(null); // State for selected message

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch all data from API
  const fetchData = async () => {
    try {
      const data = await getAllData();
      // Format the data
      const formattedData = data.map((item, index) => ({
        ...item,
        uniqueId: item.id,
        checked: item.status === "active", // Assuming 'active' represents true status
        rowNumber: index + 1 // Assuming you have a 'rowNumber' field in your data
      }));
      setResponses(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Toggle status of a message
  const toggleStatus = async (uniqueId, currentStatus) => {
    try {
      const newStatus = !currentStatus; // Toggle the current status
      const response = await patchData(uniqueId, { status: newStatus }); // Send PATCH request
      console.log('Toggled status for uniqueId:', uniqueId, 'New status:', newStatus, 'Response:', response); // Log the newStatus, uniqueId, and response
      
      // Update the local state with the new status
      setResponses(prevResponses =>
        prevResponses.map(response =>
          response.uniqueId === uniqueId ? { ...response, status: newStatus } : response
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Show message popup
  const showMessagePopup = (message) => {
    setSelectedMessage(message);
  };

  // Hide message popup
  const hideMessagePopup = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="admin-page">
      <main>
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Status</th>
                <th style={{ display: 'none' }}>Unique ID</th> {/* Hide Unique ID column */}
              </tr>
            </thead>
            <tbody>
              {responses.map((response, index) => (
                <tr key={response.rowNumber}>
                  <td>{index + 1}</td>
                  <td>{response.name}</td>
                  <td>{response.email}</td>
                  <td><button onClick={() => showMessagePopup(response.message)}>View</button></td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={response.status}
                        onChange={() => toggleStatus(response.uniqueId, response.status)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td style={{ display: 'none' }}>{response.uniqueId}</td> {/* Hide Unique ID column */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Message Popup */}
      {selectedMessage && (
        <div className="message-popup">
          <div className="message-popup-content">
            <span className="close" onClick={hideMessagePopup}>
              &times;
            </span>
            <p>{selectedMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
