import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import { Props as ShineWrapperProps } from './fragments/ShineWrapper'
import { Props as PhoneContentProps } from './fragments/PhoneContent'
import PhoneLayout from '.'

afterEach(cleanup)

jest.mock('./fragments/Header', () => {
  return (): JSX.Element => <div data-testid='fake-header' />
})

jest.mock('./fragments/Footer', () => {
  return (): JSX.Element => <div data-testid='fake-footer' />
})

jest.mock('./fragments/ShineWrapper', () => {
  return ({ children }: ShineWrapperProps): JSX.Element => (
    <div data-testid='fake-shine-wrapper'>{children}</div>
  )
})

jest.mock('./fragments/PhoneContent', () => {
  return ({ children }: PhoneContentProps): JSX.Element => (
    <div data-testid='fake-shine-wrapper'>{children}</div>
  )
})

describe('PhoneLayout', () => {
  it('should render correctly with only the required props', () => {
    const props = {
      children: <div>Test content</div>,
    }
    const component = render(<PhoneLayout {...props} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="PhoneLayout css-1rle95y"
          >
            <div
              class="PhoneFrame css-1qsb0fj"
            >
              <div
                class="PhoneFrameInner css-1h75gl7"
              >
                <div
                  data-testid="fake-shine-wrapper"
                >
                  <div
                    class="PhoneBody css-19555j8"
                  >
                    <div
                      data-testid="fake-header"
                    />
                    <div
                      data-testid="fake-shine-wrapper"
                    >
                      <div>
                        Test content
                      </div>
                    </div>
                    <div
                      data-testid="fake-footer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })

  it('should render correctly with all props', () => {
    const props = {
      children: <div>Test content</div>,
      className: 'TestPhoneLayout',
    }
    const component = render(<PhoneLayout {...props} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="TestPhoneLayout css-1rle95y"
          >
            <div
              class="PhoneFrame css-1qsb0fj"
            >
              <div
                class="PhoneFrameInner css-1h75gl7"
              >
                <div
                  data-testid="fake-shine-wrapper"
                >
                  <div
                    class="PhoneBody css-19555j8"
                  >
                    <div
                      data-testid="fake-header"
                    />
                    <div
                      data-testid="fake-shine-wrapper"
                    >
                      <div>
                        Test content
                      </div>
                    </div>
                    <div
                      data-testid="fake-footer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
