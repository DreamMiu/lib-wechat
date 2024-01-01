import {Contact} from "@/entries/contact";

export const getPgv = (c?:string) => {
    return (c || '') + Math.round(2147483647 * (Math.random() || 0.5)) * (+new Date() % 1E10)
}
export function getDeviceID () {
    return 'e' + ('' + Math.random().toFixed(15)).substring(2, 17)
}
export function isRoomContact (user_name:string) {
    return user_name ? /^@@|@chatroom$/.test(user_name) : false
}
export function convertEmoji (s:string) {
    return s ? s.replace(/<span.*?class="emoji emoji(.*?)"><\/span>/g, (a, b) => {
        switch (b.toLowerCase()) {
            case '1f639':
                b = '1f602'
                break
            case '1f64d':
                b = '1f614'
                break
        }
        let s = null
        if (b.length === 4 || b.length === 5) {
            s = ['0x' + b]
        } else if (b.length === 8) {
            s = ['0x' + b.slice(0, 4), '0x' + b.slice(4, 8)]
        } else if (b.length === 10) {
            s = ['0x' + b.slice(0, 5), '0x' + b.slice(5, 10)]
        } else {
            return '*'
        }
        return String.fromCodePoint.apply(null, s)
    }) : ''
}
