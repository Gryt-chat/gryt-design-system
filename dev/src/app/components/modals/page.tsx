import { ModalBox, ModalActionWrapper, ModalButton } from '@/index'
import { PageWrapper } from '@/pageComponents/PageWrapper'
import Link from 'next/link'
import React from 'react'

const WelcomeModal = () => {
  const id = 'WelcomeModal'
  return (
    <>
      <ModalButton modalId={id} className='btn btn-ghost'>
        Welcome
      </ModalButton>
      <ModalBox modalId={id}>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold'>Welcome to Gryt 🎉</h1>
          <p>
            Please abide by our{' '}
            <Link
              className='link link-secondary'
              href='https://github.com/Gryt-chat/gryt'
              target='_blank'
            >
              Terms of Service
            </Link>{' '}
            and follow the rules of the communities you are a part of 🙂
          </p>
          <p>
            If you need any help, please visit our{' '}
            <Link
              className='link link-secondary'
              href='https://github.com/orgs/Gryt-chat/discussions'
              target='_blank'
            >
              forums
            </Link>
          </p>
        </div>
        <ModalActionWrapper>
          <ModalButton modalId={id}>Let&#39;s go!</ModalButton>
        </ModalActionWrapper>
      </ModalBox>
    </>
  )
}

const NewsModal = () => {
  const id = 'NewsModal'
  return (
    <>
      <ModalButton modalId={id} className='btn-primary'>
        News
      </ModalButton>
      <ModalBox modalId={id}>
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='text-2xl font-bold'>Extra! Extra!</h1>
            <h2 className='text-primary font-medium'>V.0.1.3</h2>
          </div>
          <div
            className='overflow-y-auto w-full flex flex-col gap-8'
            style={{ maxHeight: '70vh' }}
          >
            <ul className='list-disc pl-4'>
              <h2 className='text-lg font-semibold'>New features</h2>
              <li>Integer dapibus ante ac fermentum tincidunt.</li>
              <li>In in arcu tempor est luctus facilisis ac ac felis.</li>
              <li>
                Nunc eget arcu eget sapien blandit pellentesque sed ac metus.
              </li>
              <li>Aliquam hendrerit ex nec tincidunt ultrices.</li>
              <li>Proin volutpat ipsum eget pharetra lacinia.</li>
              <li>
                Vivamus bibendum enim ac ante accumsan, vitae finibus leo
                tempor.
              </li>
            </ul>
            <ul className='list-disc pl-4'>
              <h2 className='text-lg font-semibold'>Bugfixes</h2>
              <li>Donec vestibulum metus vitae lectus condimentum molestie.</li>
              <li>Duis a nibh a sapien hendrerit bibendum.</li>
              <li>
                Pellentesque volutpat lorem posuere lacus elementum, in lobortis
                purus blandit.
              </li>
            </ul>
            <ul className='list-disc pl-4'>
              <h2 className='text-lg font-semibold'>Beta features</h2>
              <li>Nullam lacinia velit id tortor egestas tincidunt.</li>
              <li>
                Praesent sit amet sem molestie, sagittis tellus vitae, facilisis
                elit.
              </li>
              <li>In sed lectus eget erat tempus tincidunt et in magna.</li>
              <li>Nulla malesuada tortor volutpat consequat consequat.</li>
              <li>Donec in eros eu elit tristique placerat ut eu libero.</li>
            </ul>
          </div>
        </div>
        <ModalActionWrapper>
          <ModalButton className='btn-primary' modalId={id}>
            Cool
          </ModalButton>
        </ModalActionWrapper>
      </ModalBox>
    </>
  )
}

const WarningModal = () => {
  const id = 'WarningModal'
  return (
    <>
      <ModalButton modalId={id} className='btn-warning'>
        Warning
      </ModalButton>
      <ModalBox modalId={id}>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold'>Stop!</h1>
          <p>
            You are about to <strong className='text-error'>permanently</strong>{' '}
            delete the text-channel called{' '}
            <strong className='text-warning'>General</strong>. All chat messages
            and media posted in{' '}
            <strong className='text-warning'>General</strong> will be discarded
            forever.
          </p>
          <p>Do you wish to proceed?</p>
        </div>
        <ModalActionWrapper>
          <ModalButton className='btn-ghost' modalId={id}>
            Yes, delete my channel
          </ModalButton>
          <ModalButton className='btn-warning' modalId={id}>
            No, cancel
          </ModalButton>
        </ModalActionWrapper>
      </ModalBox>
    </>
  )
}

const SuccessModal = () => {
  const id = 'SuccessModal'
  return (
    <>
      <ModalButton modalId={id} className='btn-success'>
        Success
      </ModalButton>
      <ModalBox modalId={id}>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold'>Server created 🥳</h1>
          <p>Congratulations, your server has been created!</p>
        </div>
        <ModalActionWrapper>
          <ModalButton className='btn-ghost' modalId={id}>
            Close
          </ModalButton>
          <ModalButton className='btn-success' modalId={id}>
            Take me there
          </ModalButton>
        </ModalActionWrapper>
      </ModalBox>
    </>
  )
}

const InfoModal = () => {
  const id = 'InfoModal'
  return (
    <>
      <ModalButton modalId={id} className='btn-info'>
        Info
      </ModalButton>
      <ModalBox modalId={id}>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold'>Server updated</h1>
          <p>
            Your server has been successfully updated to the latest version{' '}
            <strong>(v. 2.6.3)</strong>
          </p>
        </div>
        <ModalActionWrapper>
          <ModalButton className='btn-info' modalId={id}>
            Okay
          </ModalButton>
        </ModalActionWrapper>
      </ModalBox>
    </>
  )
}

export default function badges() {
  return (
    <PageWrapper title='Modals' description='Annoying popups'>
      <div className='flex flex-row gap-4'>
        <WelcomeModal />
        <NewsModal />
        <WarningModal />
        <SuccessModal />
        <InfoModal />
      </div>
    </PageWrapper>
  )
}
