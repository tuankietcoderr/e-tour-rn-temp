import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppFonts, AppFontSizes } from '@assets/themes/font'
import { AppColors } from '@assets/themes/colors'

const SignUp = ({ navigation }: NativeStackScreenProps<any>) => {
    const handlePressNext = () => {
        navigation.navigate('NextSignup')
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    paddingHorizontal: 20,
                    gap: 40,
                }}
            >
                <Text
                    style={{
                        fontFamily: AppFonts.semiBold,
                        fontSize: AppFontSizes.h2,
                    }}
                >
                    Sign up
                </Text>
                <View>
                    <Text
                        style={{
                            fontFamily: AppFonts.regular,
                            fontSize: AppFontSizes.body,
                        }}
                    >
                        Username
                    </Text>
                    <TextInput style={styles.input} placeholder="Enter your username" autoFocus />
                </View>
                <View>
                    <Text
                        style={{
                            fontFamily: AppFonts.regular,
                            fontSize: AppFontSizes.body,
                        }}
                    >
                        Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                        autoComplete="off"
                    />
                </View>
                <View>
                    <Text
                        style={{
                            fontFamily: AppFonts.regular,
                            fontSize: AppFontSizes.body,
                        }}
                    >
                        Confirm password
                    </Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Re-enter your password"
                        autoComplete="off"
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: AppColors.primary,
                        height: 50,
                        justifyContent: 'center',
                        borderRadius: 6,
                    }}
                    onPress={handlePressNext}
                >
                    <Text
                        style={{
                            fontFamily: AppFonts.semiBold,
                            fontSize: AppFontSizes.body,
                            textAlign: 'center',
                            color: AppColors.white,
                        }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.white,
    },
    input: {
        borderBottomColor: AppColors.gray,
        borderBottomWidth: 1,
        backgroundColor: AppColors.white,
        width: '100%',
        height: 50,
        fontFamily: AppFonts.regular,
        fontSize: AppFontSizes.body,
    },
})
