const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('Oxi-Revised API loaded.');
});

router.get('/nodes', (req, res) => {
    // UPDATE TO LIST NODES
    res.status(200).send('List of nodes:');
});

router.post('/update', (req, res) => {
    // UPDATE TO PERFORM UPDATE ON ALL NODES
    res.status(200).send('Updating all nodes...');
});

router.post('/update/:nodeName', (req, res) => {
    // UPDATE TO PERFORM UPDATE ON NAMED NODE
    const nodeName = req.params.nodeName;
    res.status(200).send(`Updating node ${nodeName}...`);
});

module.exports = router;