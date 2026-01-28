import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "./post-confirmation/resource"
import { EVERYONE_GROUP_NAME } from "./constants";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: [EVERYONE_GROUP_NAME],
  triggers: {
    postConfirmation,
  },
  access: (allow) => [
    allow.resource(postConfirmation).to(["addUserToGroup"]),
  ],
})