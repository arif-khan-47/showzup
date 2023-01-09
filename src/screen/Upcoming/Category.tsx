import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import tw from 'twrnc'
  
  const Category = () => {
    const { width, height } = Dimensions.get('window');
    const sdata = [
      {
        id: 1,
        title: 'Action',
        isSelected: false,
      },
      {
        id: 2,
        title: 'SiFi',
        isSelected: false,
      },
      {
        id: 3,
        title: 'Suspence',
        isSelected: false,
      },
      {
        id: 4,
        title: 'Romantic',
        isSelected: false,
      },
      {
        id: 5,
        title: 'Comedy',
        isSelected: false,
      },
      {
        id: 6,
        title: 'Fantacy',
        isSelected: false,
      },
      {
        id: 7,
        title: 'Advanture',
        isSelected: false,
      },
      {
        id: 8,
        title: 'Thriller',
        isSelected: false,
      },
      {
        id: 9,
        title: 'Biography',
        isSelected: false,
      },
    ];
  
    const [data, setData] = useState([]);
    console.log(data);
    const [selectedInterest, setSelectedInterest] = useState({
      items: [],
    });
    console.log(selectedInterest);
  
    useEffect(() => {
      setData(sdata);
    }, []);
  
    const onSelect = (i, selected) => {
      const tempData = data;
      var newArray = [...data];
      let obj = newArray[i];
      console.log(obj);
      obj['selected'] = selected;
      newArray[i] = obj;
  
      setData(newArray);
    };
  
    return (
      <>
        <View
          style={{
            backgroundColor: '#202020',
            width: '100%',
            marginVertical: 20,
            borderColor: '#FF6600',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text
            style={{
              paddingVertical: 10,
              textAlign: 'center',
              color: '#FF6600',
              fontWeight: '700',
              fontSize: 18,
            }}>
            Category
          </Text>
          <View style={{}}>
            <FlatList
              numColumns={3}
              data={data}
              contentContainerStyle={[tw`mx-auto`,{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // marginLeft: 'auto',
                // marginRight: 'auto',
                left: 0,
                right: 0,
                width: '100%',
              }]}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                    //   backgroundColor: 'yellow',
                    //   marginLeft: 'auto',
                    //   marginRight: 'auto',
                      padding:8,
                    }}>
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        // onSelect(index, item.selected ? false : true)
                        onSelect(index, item.isSelected ? false : true)
                      }>
                      <View
                        style={
                          {
                            borderColor: '#FF6600',
                            backgroundColor: item.selected ? '#FF6600' : null,
                            // margin:5,
                            borderRadius: 5,
                            //margin: 3,
                            paddingVertical: 5,
                            borderWidth: 1,
                            width: width / 3.5,
                          }
                          // { backgroundColor: item.selected ? '#FF4D67' : null }
                        }>
                        <Text
                          style={
                            {
                              color: item.selected ? 'white' : '#FF6600',
                              // padding: 8,
                              textAlign: 'center',
                              fontWeight: '700',
                            }
                            // { color: item.selected ? 'white' : '#FF4D67' }
                          }>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </>
    );
  };
  
  export default Category;