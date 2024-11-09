import { Icon } from 'react-native-paper'
import { Pressable } from 'react-native'

export default function LikeIconPressed({ onPress }) {

    return (
        <Pressable onPress={onPress}>
            <Icon
                source="cards-heart"
                size={28}
                color='#98002e'
                style
            />
        </Pressable>
    )
}