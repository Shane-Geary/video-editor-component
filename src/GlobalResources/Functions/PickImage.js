//Copyright 2021 Glowstik Inc. All rights reserved.
import * as ImagePicker from 'expo-image-picker'

const pickImage = async () => {
	const result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.All,
		allowsEditing: true,
		aspect: [4, 3],
		quality: 1,
	})
	if(!result.cancelled) {
		return result
	}
	throw new Error('cancelled')
}

export default pickImage