import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import PhoneContent from '.'

afterEach(cleanup)

describe('PhoneContent', () => {
  it('should render correctly using children of type string', () => {
    const stringProps = {
      children: 'Test string content',
    }
    const component = render(<PhoneContent {...stringProps} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="PhoneContentWrapper css-4fn6n"
          >
            <div
              class="PhoneContent css-1l33f8r"
            >
              <div
                class="PhoneContentInner css-1jkiw8v"
              >
                Test string content
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })

  it('should render correctly using children of type string', () => {
    const reactNodeProps = {
      children: <div>Test React Node content</div>,
    }
    const component = render(<PhoneContent {...reactNodeProps} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="PhoneContentWrapper css-4fn6n"
          >
            <div
              class="PhoneContent css-1l33f8r"
            >
              <div
                class="PhoneContentInner css-1jkiw8v"
              >
                <div>
                  Test React Node content
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
