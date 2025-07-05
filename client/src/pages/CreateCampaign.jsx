import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/campaigns', 
        { title, description, goal, deadline, image },
        { headers: { 'x-auth-token': token }}
      );
      alert('Campaign submitted for approval');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Campaign</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Title" className="w-full p-2 border rounded" />
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border rounded"></textarea>
        <input value={goal} onChange={e=>setGoal(e.target.value)} type="number" placeholder="Goal Amount" className="w-full p-2 border rounded" />
        <input value={deadline} onChange={e=>setDeadline(e.target.value)} type="date" className="w-full p-2 border rounded" />
        <input value={image} onChange={e=>setImage(e.target.value)} type="url" placeholder="Image URL" className="w-full p-2 border rounded" />
        <button className="w-full bg-indigo-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
