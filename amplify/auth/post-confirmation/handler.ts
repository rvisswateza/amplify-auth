import type { PostConfirmationTriggerHandler } from 'aws-lambda';
import {
    CognitoIdentityProviderClient
} from '@aws-sdk/client-cognito-identity-provider';
import { addUserToGroup } from '../groupUtils';
import { EVERYONE_GROUP_NAME } from '../constants';
 
const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
    await addUserToGroup(event.userName, EVERYONE_GROUP_NAME, event.userPoolId);
    return event;
};