import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { PromptSheet } from '@/components/promptSheet';

export default function Index() {
  return (
    <>
      <View className="flex-1 pt-24">
        <Text bold size="4xl" className="text-center text-gray-300">
          It's Time to learn something !
        </Text>
      </View>
      <PromptSheet />
    </>
  );
}
