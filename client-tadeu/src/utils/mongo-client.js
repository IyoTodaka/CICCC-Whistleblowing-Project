import * as Realm from "realm-web";

export const app = new Realm.App({id: import.meta.env.VITE_REALM_REPORTS_ID});
const credentials = Realm.Credentials.anonymous();
export const report = await app.logIn(credentials);

const mongo = app.currentUser.mongoClient("mongodb-atlas")
export const collection = mongo.db("whistle-reports-db").collection("whistle-reports-col")