import { useRouter } from 'expo-router/build/hooks';
import { useCallback, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
} from '@/components/ui/button';
import {
  ArrowUpIcon,
  CpuIcon,
  HandshakeIcon,
  SwatchBookIcon,
} from 'lucide-react-native';

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView edges={['top']} className="bg-gray-5 flex-1 gap-8 px-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-black">Youknow</Text>
        <Pressable onPress={handleProfile}>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <Text className="font-bold">DD</Text>
          </View>
        </Pressable>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        keyboardBlurBehavior={'restore'}
        backgroundStyle={{ borderRadius: 36 }}
      >
        <BottomSheetView className="flex-1 gap-4 p-8 pt-0">
          <View className="flex flex-row">
            <BottomSheetTextInput
              placeholder="I want to learn how to code in rust..."
              className="h-12 self-stretch text-lg"
            />
            <Button className="ml-auto self-end rounded-full">
              <ButtonIcon as={ArrowUpIcon} />
            </Button>
          </View>
          <ButtonGroup flexDirection="row">
            <Button
              size="xs"
              variant="outline"
              action="primary"
              className="rounded-full"
            >
              <ButtonText>Tech</ButtonText>
              <ButtonIcon as={CpuIcon} />
            </Button>
            <Button
              size="xs"
              variant="outline"
              action="primary"
              className="rounded-full"
            >
              <ButtonText>Business</ButtonText>
              <ButtonIcon as={HandshakeIcon} />
            </Button>
            <Button
              size="xs"
              variant="outline"
              action="primary"
              className="rounded-full"
            >
              <ButtonText>Design</ButtonText>
              <ButtonIcon as={SwatchBookIcon} />
            </Button>
          </ButtonGroup>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}
