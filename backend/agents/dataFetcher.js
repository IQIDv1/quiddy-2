const axios = require('axios');
require('dotenv').config();

exports.run = async (interpretation, senderName) => {
    try {
        // Mock student data
        const studentData = {
            name: 'Sarah Johnson',
            studentId: '123456',
            fafsaDate: '11/15/2023',
            aidStatus: ['Pell Grant: $3,172', 'Subsidized Loan: $3,500'],
            outstanding: ['Signed tax return', 'Verification of Untaxed Income']
        };

        // Mock Supabase query for financial aid policies
        const supabaseQuery = {
            policy: 'FAFSA deadline is June 30',
            source: 'guidelines'
        };

        return {
            studentInfo: studentData,
            sources: supabaseQuery
        };
    } catch (error) {
        console.error("Supabase API Error:", error.message);
        return {
            studentInfo: null,
            sources: null
        };
    }
};
