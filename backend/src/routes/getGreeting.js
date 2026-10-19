const GREETING = 'All Set to GO!!!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
