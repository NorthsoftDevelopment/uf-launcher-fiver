import React from 'react'
import { Background } from '../Global/Background/Background'
import { Layout } from '../Layout/Layout'
import '../Creator.css'
import { Instance } from '../Global/Instances/Instance'

export const ConfigCreatorInstance = () => {
  return (

    <Layout>
      <div className='content-creator'>

        <div className='text-creator'>
            <h1>Mis Instancias</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores nobis aperiam quibusdam praesentium saepe sequi nulla. Corrupti error, dolores, corporis explicabo dignissimos itaque consequuntur nemo, facere numquam impedit minima.</p>
        </div>

        <div className='instances-list'>
          <Instance 
          title='Fakeland'
          version='1.18.2'
          link='1'
          />
          <Instance 
          title='Gamership Network'
          version='1.18.2'
          link='1'
          />
          <Instance 
          title='Eladina Lalalnad'
          version='1.18.2'
          link='1'
          />
          <Instance 
          title='Wizarding Craft'
          version='1.18.2'
          link='1'
          />
        </div>
       

      </div>
    </Layout>
  )
}
