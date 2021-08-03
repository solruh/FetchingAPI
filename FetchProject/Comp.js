import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from "react-native";
const familyMembers= [
  {name: "kim song min", id: "1", phoneNumber: "010 7889 9067"},
  {name: "kim song min", id: "1", phoneNumber: "010 7569 4567"},
  {name: "kim song min", id: "1", phoneNumber: "010 7009 5597"},
  {name: "kim song min", id: "1", phoneNumber: "010 7889 1267"},
  {name: "kim song min", id: "1", phoneNumber: "010 7809 0067"},
  {name: "kim song min", id: "1", phoneNumber: "010 7888 1967"},
];
export default function Home() {
  return (
    <View>
      <First />
      <Line />
      <View style={styles.invite}>
        <TouchableOpacity onPress={()=>kakaoInviteFunction()}>
        <Keytext name={"Invite through kakao"} />
           </TouchableOpacity>
        <TouchableOpacity> 
        <Keytext name={"Invite through CONTACT"} />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Keytext name={"COpy invitation links"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const kakaoInviteFunction =()=>{
  
  // data={filters}
  // renderItem={renderFilters}
  // keyExtractor={(item) => item.id}
  // extraData={useFilterContext.selectedId}
  // horizontal
  // showsHorizontalScrollIndicator="false"





  return(
    <View style={styles.container}>

      <FlatList 
        data={familyMembers} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id} 
        
        
      />
      console.log("hey")
    </View>
);
};
const Line=()=>{
  return(
    <View style={styles.inputline}>
      <TextInput
        style={styles.line}
        placeholder="Family member to invite"
      />
       </View>
  );
};
const Keytext = (props) => {
  return (
    <View style={styles.inviteways}>
      <Text style={styles.alltext}>{props.name}</Text>
    </View>
  );
};
const First = () => {
  return (
    <View style={styles.first}>
      <Square />
      <Text style={styles.text}> Invite your family members</Text>
    </View>
  );
};
const Square = () => {
  return (
  <View style={styles.square}> </View>
  );
};
const styles = StyleSheet.create({
  invite: {
    top: 393
  },
  first: {
    flexWrap: 'wrap',
    flexDirection: "row",
    alignItems: "center",
    
  },
  inviteways: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
    width: 260,
    height: 50,
    left: 58,
    backgroundColor: "#C4C4C4",
    borderRadius: 60
  },
  square: {
    position: "absolute",
    width: 32,
    height: 32,
    left: 20,
    top: 50,
    backgroundColor: "#C4C4C4"
  },
  line: {
    position: "absolute",
    width: 240,
    left: 68,
    top: 261,
    border: 'none',
    backgroundColor: 'transparent',
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontFamily: 'SpoqaHanSans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '143.55%',
    color: '#000000',
  },
text:
     {  position: 'absolute',
        width: 250,
        height: 23,
        left: 125,
        top: 52,
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '143.55%',
        textAlign: 'center',
        color: '#000000',
    },
    alltext:{
        position: 'absolute',
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '143.55%',
        textAlign: 'center',
        color: '#000000',
    },
    container: {
      flex: 1,
      // paddingTop: 40,
      // paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      // marginTop: 24,
      // padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
    },
});
