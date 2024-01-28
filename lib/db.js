```javascript
import mongoose from 'mongoose';

const AltLayerTokenSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  totalSupply: Number,
  allocation: Number,
  launchDate: Date,
});

const ClaimTokenSchema = new mongoose.Schema({
  claimOpen: Boolean,
  claimClose: Date,
  unclaimedReturn: Boolean,
});

const AnnouncementSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  link: String,
});

const WinnersSchema = new mongoose.Schema({
  winners: [String],
});

export const getAltLayerToken = async () => {
  const AltLayerToken = mongoose.model('AltLayerToken', AltLayerTokenSchema);
  return await AltLayerToken.find({});
};

export const getClaimToken = async () => {
  const ClaimToken = mongoose.model('ClaimToken', ClaimTokenSchema);
  return await ClaimToken.find({});
};

export const getAnnouncementData = async () => {
  const Announcement = mongoose.model('Announcement', AnnouncementSchema);
  return await Announcement.find({});
};

export const getWinnersList = async () => {
  const Winners = mongoose.model('Winners', WinnersSchema);
  return await Winners.find({});
};
```