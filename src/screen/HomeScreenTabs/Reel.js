import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc'
import ReelsComponent from '../../components/Reels/ReelsComponent';





const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const Reels = () => {

  return (
    <>

      <View style={{ width: width, height: height, backgroundColor: 'black', position: 'relative' }}>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between'}, tw`px-5 mt-5 absolute top-0 left-0 right-0`]}>

          <Text style={[tw`text-[#FF4D67] text-2xl font-bold w-15`]}>Reels</Text>
          
          <TouchableOpacity style={tw`my-auto`} onPress={() => { console.log('Create Reel Button Pressed') }}>
            <MaterialCommunityIcons name='camera' size={30} color={'#FF4D67'} />
          </TouchableOpacity>
        
        </View>

        <ReelsComponent/>
      
      </View>


      
    </>
  )
}

export default Reels
