const axios = require('axios');

exports.fetchNASAData = async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: 'xqPHHcwhVhoh82vCWzLwvXfXX4OxsT6BMvLi61JM'
            }
        });

        const data = response.data;
        
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        res.status(500).json({error: 'Error fetching NASA data'});
    }
};