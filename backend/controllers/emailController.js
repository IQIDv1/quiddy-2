const interpreter = require('../agents/interpreter');
const dataFetcher = require('../agents/dataFetcher');
const responseComposer = require('../agents/responseComposer');

exports.processEmail = async (req, res) => {
    const { subject, body, senderName } = req.body;
    try {
        const interpretation = await interpreter.run(subject, body, senderName);
        const fetchedData = await dataFetcher.run(interpretation, senderName);
        const draftResponse = await responseComposer.run(fetchedData, senderName);

        res.json({
            success: true,
            draft: draftResponse.draft,
            studentInfo: fetchedData.studentInfo,
            flag: draftResponse.flag,
            sources: fetchedData.sources,
            error: null
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: "Reggy is under construction please try again in a bit" });
    }
};
