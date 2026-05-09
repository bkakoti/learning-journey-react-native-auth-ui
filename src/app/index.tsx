import React from 'react'
import {
  Alert,
  Image,
  KeyboardAvoidingView, Platform,
  Pressable,
  StyleSheet, Text, TextInput, View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>

          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Image
              source={require("@/assets/images/login/circle-user-solid.png")}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>

          <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 26 }}>Sign IN</Text>
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 16 }}>Let's experience the joy of telecare AI</Text>

          </View>

          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>Email Address</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              paddingHorizontal: 15,
              marginBlock: 12,
            }}
          >
            <Image
              source={require("@/assets/images/login/at-solid.png")}
              style={{
                width: 22,
                height: 22,
                tintColor: 'gray',
                marginRight: 10,
              }}
            />

            <TextInput
              placeholder="example@email.com"
              style={{
                flex: 1,
                paddingVertical: 14,
                fontSize: 16,
              }}
            />
          </View>

          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>Password</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              paddingHorizontal: 15,
              marginBlock: 12,
            }}
          >
            <Image
              source={require("@/assets/images/login/lock-solid.png")}
              style={{
                width: 22,
                height: 22,
                tintColor: 'gray',
                marginRight: 10,
              }}
            />

            <TextInput
              placeholder="password"
              secureTextEntry
              style={{
                flex: 1,
                paddingVertical: 14,
                fontSize: 16,
              }}
            />
          </View>

          <View style={{ marginBlock: 20 }}>
            <Pressable
              style={{
                backgroundColor: "green",
                padding: 16,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                Sign In
              </Text>
            </Pressable>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20, gap: 20, }}>
            <Pressable onPress={() => Alert.alert("Facebook Login")}>
              <Image
                source={require("@/assets/images/social/facebook-brands-solid.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Pressable>
            <Pressable onPress={() => Alert.alert("Google Login")}>
              <Image
                source={require("@/assets/images/social/google-brands-solid.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Pressable>
            <Pressable onPress={() => Alert.alert("Instagram Login")}>
              <Image
                source={require("@/assets/images/social/instagram-brands-solid.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Pressable>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 20 }}>

            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Don't have an account yet?{" "}
              <Text onPress={() => Alert.alert("Go to Sign Up")}
                style={{ color: "green", fontWeight: "bold", fontSize: 16 }}>Sign Up</Text>
            </Text>

            <Pressable onPress={() => console.log("Forgot your password")}>
              <Text style={{ color: "green", fontWeight: "bold", fontSize: 16 }}>
                Forgot your password?
              </Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})