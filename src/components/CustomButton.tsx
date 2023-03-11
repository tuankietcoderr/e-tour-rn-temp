import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppColors } from '../../assets/themes/colors'

interface IButtonProps {
    onPress: () => void
}

const CustomButton: React.FC<IButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                style={{
                    fontFamily: 'Manrope_700Bold',
                    backgroundColor: AppColors.primary,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 6,
                }}
            >
                Button
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
