import { Drawer } from '@mui/material'

export const Sidebar = () => {
  const isOpen = true
  return (
    <Drawer open={isOpen} anchor="right" hideBackdrop>
      drawer
    </Drawer>)
}