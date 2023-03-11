import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { AppFonts, AppFontSizes } from '@assets/themes/font'
import { AppColors } from '@assets/themes/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ScrollView } from 'react-native'
import { CPicker, onOpen } from '@components/Picker'
import axios from 'axios'
import { CameraIcon } from '@assets/themes/icons/outline'

interface Country {
    name: string
    code: string
    emoji: string
    unicode: string
    image: string
}

const NextSignUp = ({ navigation }: NativeStackScreenProps<any>) => {
    const handlePressConfirm = () => {
        navigation.popToTop()
        navigation.navigate('AppProvider')
    }

    const [data, setData] = useState<any>([])
    const [selected, setSelected] = useState<Country | undefined>(undefined)
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const filteredData = useMemo(() => {
        if (data && data.length > 0) {
            const filtered = data.filter((item: Country) =>
                item.name.toLocaleLowerCase('en').includes(query.toLocaleLowerCase('en'))
            )
            return filtered
        }
        return []
    }, [data, query])

    const handleOpenCountry = async () => {
        if (data.length > 0) {
            onOpen('country')
            return
        }
        setLoading(true)
        const result = await axios.get(
            'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json'
        )
        if (result.status === 200) {
            setData(result.data)
            onOpen('country')
        }
        setQuery('')
        setLoading(false)
    }

    const onSearch = (text: string) => {
        setQuery(text)
    }

    return (
        <ScrollView>
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
                            textAlign: 'center',
                        }}
                    >
                        Basic Information
                    </Text>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            backgroundColor: AppColors.ultraLight,
                            borderRadius: 100,
                            padding: 60,
                        }}
                    >
                        <CameraIcon
                            width={60}
                            height={60}
                            viewBox="0 0 42 42"
                            color={AppColors.tertiary}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Fullname
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            autoFocus
                            autoComplete="name"
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Email
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            autoComplete="email"
                            keyboardType="email-address"
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Phone number
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone number"
                            autoComplete="tel"
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Address
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your address"
                            autoComplete="street-address"
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            Nationality
                        </Text>
                        {loading && <ActivityIndicator />}
                        {selected ? (
                            <TouchableOpacity onPress={handleOpenCountry} style={styles.country}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        gap: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: AppFontSizes.body,
                                        }}
                                    >
                                        {selected.emoji}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: AppFontSizes.body,
                                            fontFamily: AppFonts.semiBold,
                                            color: AppColors.tertiary,
                                        }}
                                    >
                                        {selected.code}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.country} onPress={handleOpenCountry}>
                                <Text
                                    style={{
                                        fontFamily: AppFonts.regular,
                                        color: AppColors.tertiary,
                                    }}
                                >
                                    Choose
                                </Text>
                            </TouchableOpacity>
                        )}
                        {data && (
                            <CPicker
                                id="country"
                                data={filteredData}
                                inputValue={query}
                                searchable={true}
                                label="Select Country"
                                setSelected={setSelected}
                                onSearch={onSearch}
                            />
                        )}
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: AppFonts.regular,
                                fontSize: AppFontSizes.body,
                            }}
                        >
                            ID
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your ID number"
                            autoComplete="cc-number"
                            keyboardType="number-pad"
                        />
                    </View>
                    <View
                        style={{
                            gap: 10,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: AppColors.primary,
                                height: 50,
                                justifyContent: 'center',
                                borderRadius: 6,
                            }}
                            onPress={handlePressConfirm}
                        >
                            <Text
                                style={{
                                    fontFamily: AppFonts.semiBold,
                                    fontSize: AppFontSizes.body,
                                    textAlign: 'center',
                                    color: AppColors.white,
                                }}
                            >
                                Confirm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: AppColors.gray,
                                height: 50,
                                justifyContent: 'center',
                                borderRadius: 6,
                            }}
                            onPress={handlePressConfirm}
                        >
                            <Text
                                style={{
                                    fontFamily: AppFonts.semiBold,
                                    fontSize: AppFontSizes.body,
                                    textAlign: 'center',
                                    color: AppColors.white,
                                }}
                            >
                                Skip
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default NextSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.white,
        marginBottom: 40,
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
    country: {
        backgroundColor: AppColors.ultraLight,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        marginTop: 10,
    },
})
