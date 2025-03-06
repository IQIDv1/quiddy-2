const interpreter = require('../agents/interpreter');
const dataFetcher = require('../agents/dataFetcher');
const responseComposer = require('../agents/responseComposer');

exports.processEmail = async (req, res) => {
    console.log('Received request to /process-email');
    const { subject, body, senderName } = req.body;
    try {
        console.log('Calling Agent 1 (interpreter)...');
        const interpretation = await interpreter.run(subject, body, senderName);
        console.log('Agent 1 completed:', interpretation);

        console.log('Calling Agent 2 (dataFetcher)...');
        const fetchedData = await dataFetcher.run(interpretation, senderName);
        console.log('Agent 2 completed:', fetchedData);

        console.log('Calling Agent 3 (responseComposer)...');
        const draftResponse = await responseComposer.run(fetchedData, senderName);
        console.log('Agent 3 completed:', draftResponse);

        console.log('Sending response...');
        res.json({
            success: true,
            draft: draftResponse.draft,
            studentInfo: fetchedData.studentInfo,
            flag: draftResponse.flag,
            sources: fetchedData.sources,
            error: null
        });
    } catch (error) {
        console.error('Error in /process-email:', error);
        res.json({ success: false, error: "Reggy is under construction please try again in a bit" });
    }
};