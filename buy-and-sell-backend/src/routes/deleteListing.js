import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (re, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM listings WHERE id=?',
            [id]
        );
        return { message: 'Success!' };
    }
}