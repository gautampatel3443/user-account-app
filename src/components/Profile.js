// src/components/Profile.js
import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('user@example.com');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated');
  };

  return (
    <div className="card p-4">
      <h2>Profile</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
