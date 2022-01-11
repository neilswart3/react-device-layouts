import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import PhoneSpeaker from '.'

afterEach(cleanup)

jest.mock('../PhoneFrontCamera', () => {
  return (): JSX.Element => <div data-testid='fake-phone-front-camera' />
})

describe('PhoneSpeaker', () => {
  it('should render correctly', () => {
    const component = render(<PhoneSpeaker />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
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
                data-testid="fake-phone-front-camera"
              />
              <div
                class="PhoneSpeaker css-1w7e5mz"
              />
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
