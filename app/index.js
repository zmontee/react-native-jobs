import { View, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Stack, useRouter } from 'expo-router';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
import { useCallback, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((text) => {
    setSearchTerm(text.target.value);
  }, [setSearchTerm]);

  const searchAction = useCallback(() => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu}
                                           dimension='60%' />,
        headerRight: () => <ScreenHeaderBtn iconUrl={images.profile}
                                            dimension='100%' />,
        headerTitle: '',
      }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome searchTerm={searchTerm}
                   handleSearchChange={handleSearchChange}
                   searchAction={searchAction} />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;