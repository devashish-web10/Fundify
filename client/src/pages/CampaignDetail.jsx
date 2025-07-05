import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CampaignDetail() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [amount, setAmount] = useState('');
  const token = localStorage.getItem('token');

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/campaigns/${id}`, { headers: { 'x-auth-token': token }})
      .then(res=>setCampaign(res.data))
      .catch(err=>console.error(err));
  },[id, token]);

  const contribute = async() => {
    try {
      await axios.post(`http://localhost:5000/api/campaigns/${id}/contribute`,
        { amount }, { headers: { 'x-auth-token': token }});
      alert('Fake contribution added!');
      window.location.reload();
    } catch(err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  if (!campaign) return <p className="text-center mt-10">Loading...</p>;

  const raised = campaign.contributions.reduce((sum,c)=>sum + c.amount, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <img src={campaign.image || 'https://placehold.co/600x400'} alt={campaign.title} className="rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{campaign.title}</h2>
      <p className="text-gray-700 mb-4">{campaign.description}</p>
      <div className="mb-4">
        <p>Goal: ₹{campaign.goal}</p>
        <p>Raised: ₹{raised}</p>
      </div>
      <div className="flex space-x-2">
        <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Amount" className="p-2 border rounded w-full" />
        <button onClick={contribute} className="bg-indigo-600 text-white px-4 rounded">Contribute</button>
      </div>
    </div>
  );
}
