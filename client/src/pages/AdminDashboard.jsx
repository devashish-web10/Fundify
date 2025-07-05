import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(()=>{
    axios.get('http://localhost:5000/api/campaigns/admin/pending', { headers: { 'x-auth-token': token }})
      .then(res=>setPending(res.data))
      .catch(err=>console.error(err));
  },[token]);

  const approve = async(id) => {
    try {
      await axios.put(`http://localhost:5000/api/campaigns/admin/${id}/approve`, {}, { headers: { 'x-auth-token': token }});
      setPending(prev => prev.filter(c => c._id !== id));
    } catch(err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Pending Campaigns</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pending.map(c => (
          <div key={c._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm mb-2">{c.description.slice(0,60)}...</p>
            <button onClick={()=>approve(c._id)} className="bg-green-600 text-white px-3 py-1 rounded text-sm">Approve</button>
          </div>
        ))}
      </div>
    </div>
  );
}
