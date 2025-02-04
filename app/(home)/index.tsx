import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { PromptSheet } from '@/components/promptSheet';
import { Header } from '@/components/header';

export default function Index() {
  return (
    <SafeAreaView edges={['top']} className="bg-gray-5 flex-1 gap-8 px-6">
      <Header />
      <View className="flex-1 pt-24">
        <Text bold size="4xl" className="text-center text-gray-300">
          It's Time to learn something !
        </Text>
      </View>
      <PromptSheet />
    </SafeAreaView>
  );
}
