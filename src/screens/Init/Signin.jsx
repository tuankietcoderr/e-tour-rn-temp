import { View, Text } from 'react-native'
import React from 'react'
import { AppColors } from '@assets/themes/colors'
import { AppFonts } from '@assets/themes/font'

const Signin = () => {
    return (
        <View>
            <Text style={{ fontSize: 16, color: AppColors.primary, fontFamily: AppFonts.semiBold }}>
                Signin
            </Text>
        </View>
    )
}

export default Signin
