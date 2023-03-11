import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AppColors } from '@assets/themes/colors'
import { AppFonts, AppFontSizes } from '@assets/themes/font'
import { EyeIcon, EyeIconCrossed, GoogleIcon } from '@assets/themes/icons/outline'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

const Signin = ({ navigation }: NativeStackScreenProps<any>) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleSignIn = () => {
        navigation.navigate('AppProvider')
    }

    return (
        <View
            style={{
                height: '100%',
                backgroundColor: AppColors.ultraLight,
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: AppFontSizes.h2,
                    color: AppColors.tertiary,
                    fontFamily: AppFonts.semiBold,
                    textAlign: 'center',
                }}
            >
                Ready to go...
            </Text>
            <View
                style={{
                    gap: 20,
                    width: '100%',
                    paddingHorizontal: 20,
                }}
            >
                <TextInput style={styles.input} placeholder="Username" autoComplete="username" />
                <View
                    style={{
                        position: 'relative',
                    }}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        autoComplete="password"
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 10,
                            justifyContent: 'center',
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeIcon width={24} height={24} viewBox={'0 0 24 24'} />
                        ) : (
                            <EyeIconCrossed width={24} height={24} viewBox={'0 0 24 24'} />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: AppColors.primary,
                        borderRadius: 6,
                        height: 50,
                        justifyContent: 'center',
                    }}
                    onPress={handleSignIn}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: AppFontSizes.body,
                            color: AppColors.white,
                            fontFamily: AppFonts.semiBold,
                        }}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 4,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontFamily: AppFonts.regular,
                        }}
                    >
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text
                            style={{
                                color: AppColors.primary,
                                fontFamily: AppFonts.semiBold,
                            }}
                        >
                            Sign up here
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontFamily: AppFonts.regular,
                    }}
                >
                    or
                </Text>
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                            justifyContent: 'center',
                            backgroundColor: AppColors.white,
                            borderColor: AppColors.tertiary,
                            borderWidth: 0.5,
                            height: 50,
                            alignItems: 'center',
                            borderRadius: 6,
                        }}
                    >
                        <GoogleIcon
                            width={24}
                            height={24}
                            viewBox={'0 0 24 24'}
                            color={AppColors.tertiary}
                        />
                        <Text
                            style={{
                                fontFamily: AppFonts.semiBold,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Sign in with Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Image
                source={require('@assets/illustration/SigninIllustration.png')}
                resizeMode="cover"
            />
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    input: {
        backgroundColor: AppColors.white,
        width: '100%',
        height: 50,
        elevation: 2,
        borderRadius: 6,
        padding: 10,
        fontFamily: AppFonts.regular,
        fontSize: AppFontSizes.body,
    },
})
