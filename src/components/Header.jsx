import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as Link1 } from 'react-router-dom';

import {
  HamburgerIcon,
  CloseIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from 'ColorModeSwitcher';
import { BiBookBookmark } from 'react-icons/bi';

export default function WithSubnavigation({ category, handlePages }) {
  const { isOpen, onToggle } = useDisclosure();
  const handleClick = id => {
    handlePages(id);
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 'auto', md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          justify={{ base: 'flex-end' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex', sm: 'flex' }} ml={10}>
            <DesktopNav category={category} handleClick={handleClick} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 4, md: 4 }}
          justify={'space-betwween'}
          direction={'row'}
          spacing={4}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <TriangleUpIcon w={5} h={5} />
              ) : (
                <TriangleDownIcon w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Link1 to="/bookmark">
            <IconButton
              icon={<BiBookBookmark w={10} h={10} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Link1>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav category={category} handleClick={handleClick} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ category, handleClick }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const handleClickChild = id => {
    handleClick(id);
  };
  return (
    <Stack direction={'row'} spacing={4}>
      {category?.slice(0, 9).map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                onClick={() => handleClickChild(navItem.id)}
              >
                {navItem.name}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const MobileNav = ({ category, handleClick }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: '1' }}
    >
      {category?.map(navItem => (
        <MobileNavItem
          key={navItem.name}
          id={navItem.id}
          {...navItem}
          handleClick={handleClick}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ name, children, href, handleClick, id }) => {
  const { isOpen, onToggle } = useDisclosure();
  const handleClickChild = id => {
    handleClick(id);
  };
  return (
    <Stack spacing={4} onClick={() => handleClickChild(id) && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          // onClick={() => handleClickChild()}
        >
          {name}
        </Text>
      </Flex>
    </Stack>
  );
};
