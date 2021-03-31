import * as React from 'react'
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import { Close } from '@material-ui/icons'
import { motion } from 'framer-motion'

interface CustomModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>

  openModal: string
}

export const CustomModal: React.FC<CustomModalProps> = ({ setOpenModal, openModal }) => {
  const text1 = `This was the first project i made after picking up typescript. I learned and looked up a lot of information in the beginning around how to use typescript with react like how to anotate the type of a useState hook. how to declare the type for routerProps from react-router-dom in a page component.`
  const text2 = `By the end of this project i am fully hooked on typescript. I will most likely be using it in everything i write going forward. The developement process was so much easier once i got up and running with typescript. There are a lot of features i like about it im just going to list off a few of the things that i explored and appreciated the most about using typescript.`
  const text3 = `Being able to read the type annotations for a function that you import is a huge timesaver. Also getting auto-complete and auto-import in vscode when you have the type defs is a huge timesaver as well. You may need to install the type-def files seprately for some packages but it is well worth it. `
  const text4 = `This makes your code way easier for yourself and others to read, use and contribute to. You can store your interfaces in a type def file for your project and then you will get type checking for any variable where you use a custom type as you are developing. Another great timesaver.  `

  const subtitle1 = `Reading type defs of files that i import`
  const subtitle2 = `Declaring my own interfaces for components and data types 
  `

  const ModalText: React.FC = ({ children }) => (
    <Text my='.5rem' textAlign='justify'>
      {children}
    </Text>
  )

  const MotionBox = motion(Box)

  const ModalVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  }

  const { colorMode } = useColorMode()

  console.log(openModal)
  return (
    <motion.div
      key={openModal}
      variants={ModalVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.7 }}
    >
      <MotionBox
        fontSize={14}
        p='1rem'
        m='1rem'
        border='2px solid #Fdfffc'
        boxShadow={colorMode === 'light' ? '1px 1px 3px 0px' : ''}
        borderRadius='lg'
        overflowY='scroll'
        maxH='290px'
      >
        <Close onClick={() => setOpenModal(null)} style={{ float: 'right' }}></Close>
        <Heading textAlign='center' size='md' py='1rem'>
          TypeScript with React
        </Heading>
        <ModalText>{text1}</ModalText>
        <ModalText>{text2}</ModalText>
        <Heading size='sm'>{subtitle1}</Heading>
        <ModalText>{text3}</ModalText>
        <Heading size='sm'>{subtitle2}</Heading>
        <ModalText>{text4}</ModalText>
        {/* <ModalText>{project.body1 &&
								project.body1.length > 0 &&
								project.body1.map(node => (
									<p key={node._key}>
										{node.children.length > 0 &&
											node.children.map(text => (
												<span key={text._key}>
													{text.marks.length > 0 ? (
														<a
															href={
																node.markDefs.filter(
																	markDef =>
																		markDef._key ===
																		text.marks[0]
																)[0].href
															}
															target='_blank'
                              rel='noreferrer'
														>
															{text.text}
														</a>
													) : (
														<>{text.text}</>
													)}
												</span>
											))}
									</p>
								))}</ModalText> */}
      </MotionBox>
    </motion.div>
  )
}
