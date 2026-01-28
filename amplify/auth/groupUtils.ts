import {
    CognitoIdentityProviderClient,
    AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';
 
const client = new CognitoIdentityProviderClient();

// add user to group
export const addUserToGroup = async (userName: string, groupName: string, userPoolId: string) => {
    const command = new AdminAddUserToGroupCommand({
        GroupName: groupName,
        Username: userName,
        UserPoolId: userPoolId
    });
    const response = await client.send(command);
    console.log('processed', response.$metadata.requestId);
    return response;
};