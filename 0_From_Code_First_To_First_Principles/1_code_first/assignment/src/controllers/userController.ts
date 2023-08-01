import { QueryResult } from "pg";
import { UserData, client, insertUser, updateUser } from "../database";

export const ERROR_VALIDATION = 'ValidationError';
export const ERROR_USERNAME_TAKEN = 'UsernameAlreadyTaken';
export const ERROR_EMAIL_TAKEN = 'EmailAlreadyInUse';
export const ERROR_USER_NOT_FOUND = 'UserNotFound';

const isUsernameTaken = async (username:string):Promise<boolean> => {
    const usernameQuery = 'SELECT * FROM users WHERE username = $1';
    const usernameResult: QueryResult = await client.query(usernameQuery, [username]);

    return usernameResult && usernameResult.rowCount > 0
}

const isEmailAddressTaken = async (email:string):Promise<boolean> => {
    const emailQuery = 'SELECT id FROM users WHERE email = $1';
    const emailResult: QueryResult = await client.query(emailQuery, [email]);

    return emailResult && emailResult.rowCount > 0;
}

export const getUserDataByEmail = async (email:string) => {
    const userQuery = 'SELECT id FROM users WHERE email = $1';
    const userResult: QueryResult = await client.query(userQuery, [email]);

    return userResult.rows[0];    
}

export const createUser = async ({ email, username, firstName, lastName }: UserData) => {
    const usernameTakenResult = await isUsernameTaken(username);
    if (usernameTakenResult) {
        return {
            error: ERROR_USERNAME_TAKEN,
            data: undefined,
            success: false,
        };
    }

    const emailAddressTakenResult = await isEmailAddressTaken(email);
    if (emailAddressTakenResult) {
        return {    
            error: ERROR_EMAIL_TAKEN,
            data: undefined,
            success: false,
        };
    }

    await insertUser({ email, username, firstName, lastName });

    console.info('User data inserted into the database.');

    const selectUserQuery = 'SELECT * FROM users WHERE username = $1';
    const selectUserResult: QueryResult = await client.query(selectUserQuery, [username]);
    const user = selectUserResult.rows[0];

    return {
        error: undefined,
        data: {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
        },
        success: true,
    };
}

export const editUser = async (userId:string, { email, username, firstName, lastName }: UserData) => {
    try {        
        const usernameTakenResult = await isUsernameTaken(username);
        if (usernameTakenResult) {
            return {
                error: ERROR_USERNAME_TAKEN,
                data: undefined,
                success: false,
            };
        }
    
        const emailAddressTakenResult = await isEmailAddressTaken(email);
        if (emailAddressTakenResult) {
            return {    
                error: ERROR_EMAIL_TAKEN,
                data: undefined,
                success: false,
            };
        }
    
        await updateUser(Number(userId), { email, username, firstName, lastName });
    
        console.info('User data updated into the database.');

        const selectUserQuery = 'SELECT * FROM users WHERE username = $1';
        const selectUserResult: QueryResult = await client.query(selectUserQuery, [username]);
        const user = selectUserResult.rows[0];

        return {
            error: undefined,
            data: {
                id: user.id,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            success: true,
        };
    } catch (exception) {
        console.error(exception);
    }
}