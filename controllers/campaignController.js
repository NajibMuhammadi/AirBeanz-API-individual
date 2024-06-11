import { campaignDb } from '../models/campaignModel.js';

export default class CampaignController {
    getAllCampaigns = async (req, res) => {
        const compaigns = await campaignDb.find();

        if (!compaigns || compaigns.length === 0) {
            return res.status(404).json({ message: 'No campaigns found' });
        }

        res.status(200).json({
            success: true,
            message: 'Campaign found',
            status: 200,
            data: compaigns
        }
        );
    }

    addNewCampaign = async (req, res) => {
        const newCampaign = req.body;

        await campaignDb.insert(newCampaign);

        res.status(201).json({
            success: true,
            message: 'Campaign added',
            status: 201,
            data: newCampaign
        });
    }
    deleteCampaign = async (req, res) => {
        const removeAllFromDb = await campaignDb.removeMany({}, { multi: true })

        if (!removeAllFromDb) {
            res.status(404).json({ message: 'No campaigns found' });
        } else {
            return res.status(200).json({
                success: true,
                message: 'Campaign deleted',
                status: 200,
                data: removeAllFromDb
            });
        }
    }
}
    
