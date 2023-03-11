export interface User {
    _id: any
    fullName: string
    identity: string
    isForeigner: boolean
    email: string
    image?: string
    address?: string
    phoneNumber?: string
    identityExpiredAt?: Date
    isPhoneVerified?: boolean
    isEmailVerified?: boolean
    credential: Credential
}

export enum AuthenticationType {
    PASSWORD = 'password',
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

export enum UserType {
    CLIENT = 'client',
    STAFF = 'staff',
}

export interface Credential {
    _id: any
    authenticationType: AuthenticationType
    userType: UserType
    username?: string
    password?: string
    accessToken?: string
    refreshToken?: string
}
