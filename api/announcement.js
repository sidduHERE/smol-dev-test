import { getAnnouncementData } from '../lib/db';

export default async function handler(req, res) {
  try {
    const announcementData = await getAnnouncementData();
    res.status(200).json(announcementData);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving announcement data' });
  }
}