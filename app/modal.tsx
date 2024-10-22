import { Anchor, Paragraph, View, XStack } from 'tamagui'

export default function ModalScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <XStack gap="$2">
        <Paragraph ta="center">Made by</Paragraph>
        <Anchor col="$blue10" href="https://twitter.com/natebirdman" target="_blank">
          TC Heiner
        </Anchor>
        <Anchor
          color="$purple10"
          href="mailto:tcheiner@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          give it a ⭐️
        </Anchor>
      </XStack>
    </View>
  )
}
