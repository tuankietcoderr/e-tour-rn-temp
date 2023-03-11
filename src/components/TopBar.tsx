import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { AppColors } from '@assets/themes/colors'
import { BellIcon, SearchIcon } from '@assets/themes/icons/outline'
import { AppFonts } from '@assets/themes/font'

const TopBar = () => {
    // get dimensions

    const { width, height } = Dimensions.get('window')
    const GAP = 10
    const PADDING_HORIZONTAL = 10
    return (
        <View
            style={{
                paddingHorizontal: PADDING_HORIZONTAL,
                paddingVertical: 10,
                flexDirection: 'row',
                backgroundColor: AppColors.primary,
                alignItems: 'center',
                elevation: 5,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 60,
                    gap: GAP,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: AppColors.white,
                        alignItems: 'center',
                        paddingHorizontal: PADDING_HORIZONTAL,
                        width: width - 40 - PADDING_HORIZONTAL * 2 - GAP,
                        borderRadius: 6,
                        gap: GAP,
                        overflow: 'scroll',
                    }}
                >
                    <SearchIcon width={20} height={20} viewBox={'0 0 12 12'} />
                    <TextInput
                        placeholder="Discover new experiences"
                        style={{
                            // color: AppColors.white,
                            height: 40,
                            fontFamily: AppFonts.regular,
                            width: width - 40 - PADDING_HORIZONTAL * 2 - GAP,
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <BellIcon
                        width={26}
                        height={26}
                        viewBox={'0 0 20 20'}
                        color={AppColors.white}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopBar
