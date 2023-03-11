import Account from '../../src/screens/Account'
import History from '../../src/screens/History'
import Home from '../../src/screens/Home'
import Saved from '../../src/screens/Saved'
import { BookmarkIconFill, HistoryIconFill, HomeIconFill, UserIconFill } from './icons/fill'
import {
    HomeIconOutline,
    HistoryIconOutline,
    BookmarkIconOutline,
    UserIconOutline,
} from './icons/outline'

export const navigator = [
    {
        index: 0,
        name: 'Home',
        path: '/home',
        iconOutline: ({ width, height, viewBox, color, ...props }) => (
            <HomeIconOutline width={width} height={height} viewBox={viewBox} color={color} />
        ),
        iconFill: ({ width, height, viewBox, color, ...props }) => (
            <HomeIconFill width={width} height={height} viewBox={viewBox} color={color} />
        ),
        component: Home,
    },
    {
        index: 1,
        name: 'History',
        path: '/history',
        iconOutline: ({ width, height, viewBox, color, ...props }) => (
            <HistoryIconOutline width={width} height={height} viewBox={viewBox} color={color} />
        ),
        iconFill: ({ width, height, viewBox, color, ...props }) => (
            <HistoryIconFill width={width} height={height} viewBox={viewBox} color={color} />
        ),
        component: History,
    },
    {
        index: 2,
        name: 'Saved',
        path: '/saved',
        iconOutline: ({ width, height, viewBox, color, ...props }) => (
            <BookmarkIconOutline width={width} height={height} viewBox={viewBox} color={color} />
        ),
        iconFill: ({ width, height, viewBox, color, ...props }) => (
            <BookmarkIconFill width={width} height={height} viewBox={viewBox} color={color} />
        ),
        component: Saved,
    },
    {
        index: 3,
        name: 'Account',
        path: '/account',
        iconOutline: ({ width, height, viewBox, color, ...props }) => (
            <UserIconOutline width={width} height={height} viewBox={viewBox} color={color} />
        ),
        iconFill: ({ width, height, viewBox, color, ...props }) => (
            <UserIconFill width={width} height={height} viewBox={viewBox} color={color} />
        ),
        component: Account,
    },
]
