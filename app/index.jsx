import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../src/Screens/Splash"
import Login from "../src/Screens/Login"
import Signup from "../src/Screens/Signup"
import Home from "@/app/home/Home"

const Stack = createNativeStackNavigator()

export default function Index() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}
Index.options = {
    headerShown: false,
}
