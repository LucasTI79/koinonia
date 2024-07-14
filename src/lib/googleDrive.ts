import { environments } from "@/config/environments";
import { google } from "googleapis";

const credentials = environments.googleCredentials ? JSON.parse(environments.googleCredentials) : {};

const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

const auth = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    scopes
)

const drive = google.drive({
    version: "v3",
    auth,
})

export { drive, auth }