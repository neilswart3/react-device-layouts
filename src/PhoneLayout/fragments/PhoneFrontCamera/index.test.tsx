import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import PhoneFrontCamera from '.'

afterEach(cleanup)

describe('PhoneFrontCamera', () => {
  it('should render correctly', () => {
    const component = render(<PhoneFrontCamera />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="PhoneFrontCamera css-fnw2n6"
          >
            <div
              class="PhoneFrontCameraInner css-185j4dq"
            >
              <div
                class="PhoneFrontCameraLens css-nx4yit"
              />
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
