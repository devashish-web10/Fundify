const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  contributor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  contributedAt: { type: Date, default: Date.now }
});

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  deadline: { type: Date, required: true },
  image: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved: { type: Boolean, default: false },
  contributions: [ContributionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Campaign', CampaignSchema);
