import { Toast, useToastController, useToastState } from '@tamagui/toast'
import { Activity, Airplay } from '@tamagui/lucide-icons'
import {Button, Group, ListItem, Separator, XGroup, YGroup, YStack, Label, isWeb} from 'tamagui'
import React from "react";

export function CurrentToast() {
  const currentToast = useToastState()

  if (!currentToast || currentToast.isHandledNatively) return null

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={isWeb ? '$12' : 0}
      theme="purple"
      br="$6"
      animation="quick"
    >
      <YStack ai="center" p="$2" gap="$2">
        <Toast.Title fow="bold">{currentToast.title}</Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  )
}

export function ToastControl() {
  const toast = useToastController()

  return (
      <YStack gap="$2" ai="center">
          <YGroup separator={<Separator />}>
              <YGroup.Item>
                  <XGroup>
                    <Group.Item>
                        <Label>Username</Label>
                        <Label> tcheina</Label>
                    </Group.Item>
                      <Group.Item>
                          <Button>Modify</Button>
                      </Group.Item>
                  </XGroup>
              </YGroup.Item>
              <YGroup.Item>
                  <ListItem title="Second" subTitle="Second subtitle" />
              </YGroup.Item>
              <YGroup.Item>
                  <ListItem>Third</ListItem>
              </YGroup.Item>
          </YGroup>
      </YStack>
  )
}
