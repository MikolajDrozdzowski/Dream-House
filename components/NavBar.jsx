import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="4xl" color="purple.600" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Dream House
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu id='navbar' isLazy>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
          id='menu-button'
          key='menu-button'
        />
        <MenuList id='menu-list'>
          <Link href="/" passHref>
            <MenuItem id='menu-list-1' icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem id='menu-list-2' icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem id='menu-list-3' icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem id='menu-list-4' icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
