import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react"

export const Sidebar = () => {
  const isOpen = true
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={() => {}}>
      <DrawerContent>
        <DrawerBody>
          drawer
        </DrawerBody>
      </DrawerContent>
    </Drawer>)
}