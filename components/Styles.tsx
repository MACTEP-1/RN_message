import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#ff1",
        flex: 1,
    },

    personalInfoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "stretch",
    },

    logo: {width: "auto", resizeMode: "contain" },

    enterYourName: {
        alignSelf: "center",
    },

    nameText: {
        fontSize: 20,
    },

    nameTextInput: {
        borderColor: "rgba(52, 52, 52, 0.8)",
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 18,
    },

    avatarBig: {
        height: 100,
        width: 100,
        borderRadius: 20, 
        marginTop: 15,
        alignSelf: "center",
    },

    sendSection: {
        flexDirection: "row",
        margin: 15,
    },

    chatTextInput: {
        marginRight: 5,
        borderColor: "rgba(52, 52, 52, 0,8)",
        borderWidth: 1,
        borderRadius: 4,
        flexGrow: 1,
        fontSize: 18,
    },

    flatListItem: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        paddingBottom: 7,
        marginBottom: 7,
        marginLeft: 16,
        marginRight: 16,
        borderColor: "green",
    },

    messageHeader: {
        flexDirection: "row",
        flexWrap: "wrap",
      },

    avatarSmall: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 2,
      },

    smallItalicText: {
        fontSize: 16,
        fontStyle: "italic",
        alignSelf: "center",
      },

    chatText: {
        fontSize: 18,
      },
})