import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View , SafeAreaView, Image, 
TouchableOpacity, 
  } from 'react-native';
import { InfoImage} from '../../components'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F74F43',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  logo: {
    height: 44,
    width: 126,
  
  

  }
});
