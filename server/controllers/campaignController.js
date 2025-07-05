const Campaign = require('../models/Campaign');

exports.create = async(req, res) => {
  const { title, description, goal, deadline, image } = req.body;
  try {
    const campaign = await Campaign.create({
      title, description, goal, deadline, image,
      creator: req.user.id,
      approved: false
    });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.listApproved = async(req, res) => {
  try {
    const campaigns = await Campaign.find({ approved: true });
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getById = async(req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate('creator', 'name');
    if (!campaign) return res.status(404).json({ msg: 'Not found' });
    if (!campaign.approved && !req.user?.isAdmin && String(campaign.creator._id) !== req.user?.id) {
      return res.status(403).json({ msg: 'Not approved yet' });
    }
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.fakeContribute = async(req, res) => {
  const { amount } = req.body;
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign || !campaign.approved) return res.status(404).json({ msg: 'Campaign not available' });
    campaign.contributions.push({ contributor: req.user.id, amount });
    await campaign.save();
    res.json({ msg: 'Contribution added (fake)', campaign });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.listPending = async(req, res) => {
  try {
    const campaigns = await Campaign.find({ approved: false });
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.approve = async(req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    if (!campaign) return res.status(404).json({ msg: 'Not found' });
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
