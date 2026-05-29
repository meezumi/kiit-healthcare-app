'use server'
import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils"

export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(
            ID.unique(), 
            user.email, 
            user.phone, 
            undefined, 
            user.name
        )
        console.log({newUser})
        return parseStringify(newUser);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
        if (error && error?.code === 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])

            const existingUser = documents?.users[0];
            if (!existingUser) throw new Error('User conflict but could not retrieve existing user.');
            return parseStringify(existingUser);
        }
        throw error;
    }
}