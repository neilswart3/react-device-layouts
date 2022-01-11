import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import Header from '.'

afterEach(cleanup)

describe('Header', () => {
  it('should render correctly', () => {
    const component = render(<Header />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="Header css-1y2t85d"
          >
            <div
              class="PhoneSpeakerWrapper css-skbky2"
            >
              <div
                class="PhoneSensor css-16k63t6"
              />
              <div
                class="PhoneFrontCameraWrapper css-8cp0xx"
              >
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
                <div
                  class="PhoneSpeaker css-1w7e5mz"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
