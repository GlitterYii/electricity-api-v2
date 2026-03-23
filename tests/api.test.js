const request = require('supertest');
const app = require('../index');
describe('Electricity API Endpoints', () => {
    // Test Case 1: Total Usage by Year
    it('should return total electricity usage for all years', async () => {
        const res = await request(app).get('/api/usage/total-by-year');
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
    });

    // Test Case 2: Total Users by Year
    it('should return total electricity users for all years', async () => {
        const res = await request(app).get('/api/users/total-by-year');
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe('object');
    });

    // Test Case 3: Usage History for a Province
    it('should return usage history for a specific province', async () => {
        const res = await request(app).get('/api/usage/history/Alberta');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    // Test Case 4: User History for a Province
    it('should return user history for a specific province', async () => {
        const res = await request(app).get('/api/users/history/Bangkok');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    // Test Case 5: Usage by Province and Year
    it('should return electricity usage for a specific province and year', async () => {
        const res = await request(app).get('/api/usage/Alberta/2566');
        expect(res.status).toBe(200);
        if (res.body.message) {
            expect(res.body.message).toBe('Data not found');
        } else {
            expect(typeof res.body).toBe('object');
        }
    });

    // Test Case 6: Users by Province and Year
    it('should return electricity users for a specific province and year', async () => {
        const res = await request(app).get('/api/users/Bangkok/2566');
        expect(res.status).toBe(200);
        if (res.body.message) {
            expect(res.body.message).toBe('Data not found');
        } else {
            expect(typeof res.body).toBe('object');
        }
    });
});