import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Button, ButtonGroup, ButtonIcon, ButtonText } from './ui/button';
import {
  ArrowUpIcon,
  CpuIcon,
  SwatchBookIcon,
  ZapIcon,
} from 'lucide-react-native';
import { View } from 'react-native';

export function PromptSheet() {
  return (
    <BottomSheet
      keyboardBlurBehavior={'restore'}
      backgroundStyle={{ borderRadius: 36 }}
    >
      <BottomSheetView className="flex-1 gap-4 p-8 pt-0">
        <View className="flex flex-row">
          <BottomSheetTextInput
            autoFocus={true}
            placeholder="I want to learn how to code in rust..."
            className="h-12 w-[80%] text-lg"
          />
          <Button className="ml-auto self-end rounded-full">
            <ButtonIcon as={ArrowUpIcon} />
          </Button>
        </View>
        <ButtonGroup flexDirection="row">
          <Button
            size="xs"
            variant="solid"
            action="primary"
            className="rounded-full"
          >
            <ButtonText>Quickie</ButtonText>
            <ButtonIcon as={ZapIcon} />
          </Button>
          <Button
            size="xs"
            variant="outline"
            action="primary"
            className="rounded-full"
          >
            <ButtonText>In depth</ButtonText>
            <ButtonIcon as={CpuIcon} />
          </Button>
          <Button
            size="xs"
            variant="outline"
            action="primary"
            className="rounded-full"
          >
            <ButtonText>Expertise</ButtonText>
            <ButtonIcon as={SwatchBookIcon} />
          </Button>
        </ButtonGroup>
      </BottomSheetView>
    </BottomSheet>
  );
}
