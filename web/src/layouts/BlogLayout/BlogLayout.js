import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import Logo from 'src/components/Logo/Logo'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(currentUser)
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Link to={routes.home()}>
              <Logo />
            </Link>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Link to={routes.about()}>
                    <Button key="about">About</Button>
                  </Link>
                  <Link to={routes.contact()}>
                    <Button key="contact">Contact</Button>
                  </Link>
                </ButtonGroup>
                <HStack spacing="3">
                  {isAuthenticated ? (
                    <div>
                      <span>Logged in as {currentUser.email}</span>{' '}
                      <Button variant="primary" onClick={logOut}>
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Link to={routes.login()}>
                        <Button variant="ghost">Sign in</Button>
                      </Link>
                      <Link to={routes.signup()}>
                        <Button variant="primary">Sign up</Button>
                      </Link>
                    </div>
                  )}
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Box bg="gray-100">
        <Container>
          <VStack>{children}</VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default BlogLayout
