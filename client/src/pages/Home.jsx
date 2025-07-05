import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/campaigns')
      .then(res => setCampaigns(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {campaigns.map(c => <CampaignCard key={c._id} campaign={c} />)}
    </div>
  );
}
