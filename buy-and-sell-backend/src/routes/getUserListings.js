import * as admin from 'firebase-admin';
import { db } from '../database';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);

        if (user.user_id !== userId) throw Boom.unauthorized('Users can only access their own listings!');

        const userId = req.params.userId;
        const { results } = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId]
        );
        return results;
    }
}