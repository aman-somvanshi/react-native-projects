import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

//Step1 - Create an appwrite client

const appwriteClient = new Client ()

//Extraction of constants and variables

const APPWRITE_ENDPOINT : string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID : string = Config.APPWRITE_PROJECT_ID!;

//Creating types as we are in typescript 
type createUserAccount = {
    email: string;
    password: string;
    name: string;
}

type LoginUserAccount = {
    email: string;
    password: string;
}

//Creation of a service -- basically a class having multiple methods
class appwriteService {
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
    }

    //create a new record of user inside appwrite

    async createAccount ({email, password, name}: createUserAccount){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            
            if (userAccount) {
                //TODO: create login feature
                return this.login({email, password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: createAccount() ::" + error);
        }
    }

    async login({email, password}: LoginUserAccount){
        try {
            // Check if user is already logged in
            const currentUser = await this.getCurrentUser();
            if (currentUser) {
                // User is already logged in, no need to log in again
                return currentUser;
            }
            
            // User is not logged in, proceed with login
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: loginAccount() ::" + error);  
        }
    }
    

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount() ::" + error);
        }
    }

     async logout(){
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount() ::" + error);
        }
    }
}

export default appwriteService