import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AppColors } from '@assets/themes/colors'
import { AppFonts, AppFontSizes } from '@assets/themes/font'
import { ArrowRightIcon } from '@assets/themes/icons/outline/'
import { useNavigation } from '@react-navigation/core'

const Onboarding = () => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                minHeight: '100%',
                backgroundColor: AppColors.ultraLight,
                flex: 1,
                justifyContent: 'space-evenly',
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
                Welcome to E-tour
            </Text>
            <Text
                style={{
                    fontSize: AppFontSizes.body,
                    textAlign: 'center',
                    fontFamily: AppFonts.regular,
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation u
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Signin' as never)}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: AppFontSizes.body,
                        textAlign: 'center',
                        color: AppColors.primary,
                        fontFamily: AppFonts.semiBold,
                    }}
                >
                    Get Started{' '}
                    <ArrowRightIcon
                        color={AppColors.primary}
                        width={20}
                        height={20}
                        viewBox={'0 0 20 20'}
                    />
                </Text>
            </TouchableOpacity>
            <Image
                source={require('@assets/illustration/OnboardIllustration.png')}
                style={{
                    width: '125%',
                    height: '50%',
                    marginLeft: 20,
                    // position: 'absolute',
                }}
                resizeMode="cover"
            />
        </View>
    )
}

export default Onboarding
