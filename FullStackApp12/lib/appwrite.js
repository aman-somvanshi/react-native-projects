import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint : 'https://cloud.appwrite.io/v1',
    platform: 'com.rn.aora',
    projectId: '6676431a000f115caff2',
    databaseId:'66764bfb001178092d2f',
    userCollectionId: '66764c2d00394c044b23',
    videoCollectionId: '66764c5000087bfd7e4e',
    storageId: '66766548003207116bf5',
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client) 

export const createUser = async (email, password, username ) => {
    try {
        // console.log("Creating user with email:", email);
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw new Error('Failed to create account')

        // console.log("New account created:", newAccount);    

        const avatarUrl = avatars.getInitials(username)
        // console.log("Avatar URL generated:", avatarUrl);

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar : avatarUrl
            }
        )

        // console.log("New user document created:", newUser);

        return newUser;
    } catch (error) {
        console.log('Error in createUser:', error);
        throw new Error(error)
    }
}    

export const signIn = async (email, password) => {
    try {
        // await account.deleteSessions(); // Delete any existing sessions

        const session = await account.createEmailPasswordSession(email, password)
        // console.log("Session created:", session);

        return session
    } catch (error) {
        console.error('Error in signIn:', error);
        throw new Error(error.message)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )


        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
} 