import { View, Text } from 'react-native'
import React from 'react'
import { AppColors } from '../../../assets/themes/colors'
import { AppFonts } from '../../../assets/themes/font'

const Onboarding = () => {
    return (
        <View
            style={{
                minHeight: '100%',
                backgroundColor: AppColors.ultraLight,
            }}
        >
            <Text style={{ fontSize: 16, color: AppColors.primary, fontFamily: AppFonts.semiBold }}>
                Onboarding
            </Text>
        </View>
    )
}

export default Onboarding
