import { Link } from 'react-router-dom';

export default function CampaignCard({ campaign }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={campaign.image || 'https://placehold.co/600x400'} alt={campaign.title} className="h-40 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold text-lg">{campaign.title}</h3>
      <p className="text-sm text-gray-600">{campaign.description.slice(0, 80)}...</p>
      <Link to={`/campaign/${campaign._id}`} className="text-indigo-600 text-sm mt-2 inline-block">View</Link>
    </div>
  );
}
