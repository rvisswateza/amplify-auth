import { defineFunction } from '@aws-amplify/backend';
import { EVERYONE_GROUP_NAME } from '../constants';

export const postConfirmation = defineFunction({
    name: 'post-confirmation',
    // optionally define an environment variable for your group name
    environment: {
        GROUP_NAME: EVERYONE_GROUP_NAME
    },
    resourceGroupName: 'auth'
});