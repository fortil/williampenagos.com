import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzymify from 'expect-enzyme'
import IndexPage from '../pages/index'

configure({ adapter: new Adapter() })

describe('Index', () => {
  it('Renders', () => {
    const messages = {
      LABEL: 'Maguffin'
    }

    const indexPage = mount(
      <IndexPage
        country="us"
        language="en"
        path="/"
        messageBases={messages}
      />
    )
  })
})