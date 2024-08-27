import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://wiredbrainchatserver.asurewebsites.net//chathub")
    .withAutomaticReconnect()
    .build();

export default connection;