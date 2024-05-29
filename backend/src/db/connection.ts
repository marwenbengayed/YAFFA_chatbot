import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new error('Can Not Connect To MongoDB');
        
    }

}

async function disconnectfromdatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new error('Can Not Disconnect From MongoDB');
    }    
    
}

export { connectToDatabase, disconnectfromdatabase };