import { ServerCard } from '@/index'
import React from 'react'
import { ComponentsWrapper } from '..'

export default function servercards() {
  return (
    <ComponentsWrapper>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-lg font-semibold'>Card without any data</h1>
        <ServerCard title='Title' description='Description' />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-lg font-semibold'>Sample card</h1>
        <ServerCard
          title='Gryt'
          description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
          logoURL='/images/duck.jpeg'
          bannerColor='#F8D385'
          logoColor='#272935'
        />
      </div>
      <div className='flex flex-col gap-2 items-center w-full'>
        <h1 className='text-lg font-semibold'>Example cards:</h1>
        <div
          className='grid gap-9 place-content-center w-full'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, 280px)',
            gridAutoFlow: 'dense'
          }}
        >
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/duck.jpeg'
            bannerColor='#F8D385'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/minimal.jpeg'
            bannerURL='/images/pexels-ingrid-north-14383467.jpg'
            bannerColor='#7E78D2'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/cowboy.jpeg'
            bannerColor='#91F5AD'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/gryt.png'
            bannerColor='#B6B8D6'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/duck.jpeg'
            bannerColor='#E05263'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/minimal.jpeg'
            bannerColor='#AA4465'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/cowboy.jpeg'
            bannerColor='#CC998D'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/gryt.png'
            bannerColor='#355834'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/duck.jpeg'
            bannerColor='#E5C2C0'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/minimal.jpeg'
            bannerColor='#20063B'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/cowboy.jpeg'
            bannerColor='#429EA6'
          />
          <ServerCard
            title='Gryt'
            description='Welcome to our community! We are excited to have you here as a member of our growing community of privacy-conscious individuals.'
            logoURL='/images/minimal.jpeg'
            bannerColor='#AA4465'
          />
        </div>
      </div>
    </ComponentsWrapper>
  )
}
