import { Icon } from 'react-native-paper'
import { Pressable } from 'react-native'

export default function LikeIcon({ onPress }) {

    return (
        <Pressable onPress={onPress}>
            <Icon
                source="cards-heart-outline"
                size={25}
                color='#98002e'
            />
        </Pressable>
    )
}