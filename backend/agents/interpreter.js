const axios = require('axios');
require('dotenv').config();

exports.run = async (subject, body, senderName) => {
    try {
        const prompt = `Extract the intent, required info, and reason from this email: ${subject} ${body}`;

        // Mocked OpenAI response for testing
        const parsedResponse = "submission_deadline"; // Simulate OpenAI response
        // const response = await axios.post("https://api.openai.com/v1/completions", {
        //     model: "text-davinci-003",
        //     prompt,
        //     max_tokens: 100
        // }, {
        //     headers: {
        //         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        //         "Content-Type": "application/json"
        //     }
        // });
        // const parsedResponse = response.data.choices[0].text.trim();

        let inquiryType = "unknown", infoNeeded = "more_info", reason = "vague_email", studentEmail = "mock@student.edu", studentName = senderName;

        // Basic parsing logic (This should be improved with structured response from OpenAI)
        if (parsedResponse.includes("submission_deadline")) {
            inquiryType = "submission_deadline";
            infoNeeded = "fafsa_deadline";
            reason = "to meet deadline";
        } else if (parsedResponse.includes("aid_status")) {
            inquiryType = "aid_status";
            infoNeeded = "all_aid_data";
            reason = "generic status check";
        }

        // Extract student name from sign-off
        const nameMatch = body.match(/(?:Thank you,|Sincerely,|Best,|Regards,|Cheers,|Warm wishes,|All the best,)[\s]*([A-Za-z]+\s[A-Za-z]+)/);
        if (nameMatch) {
            studentName = nameMatch[1];
        }

        return { inquiry_type: inquiryType, info_needed: infoNeeded, reason, studentEmail, studentName };
    } catch (error) {
        console.error("OpenAI API Error:", error.message);
        return { inquiry_type: "unknown", info_needed: "more_info", reason: "api_failure", studentEmail: "mock@student.edu", studentName: senderName };
    }
};