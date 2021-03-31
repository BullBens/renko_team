import { colors, metrics } from "@constants";
import { StyleSheet } from "react-native";

const { HEIGHT_WINDOW } = metrics

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BLACK,
        borderWidth: 1,
        width: '80%',
        height: HEIGHT_WINDOW / 2,
        borderColor: colors.WHITE
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    cityItemContainer: {
        borderBottomColor: colors.GRAY,
        borderBottomWidth: 1,
        padding: 10
    },
    cityName: {
        color: colors.WHITE,
        fontSize: 16
    }
})

export default styles