import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import ShineWrapper from '.'

afterEach(cleanup)

describe('ShineWrapper', () => {
  it('should render correctly using children of type string', () => {
    const stringProps = {
      children: 'Test string content',
    }
    const component = render(<ShineWrapper {...stringProps} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="ShineWrapper css-i07e5e"
          >
            <div
              class="Shine css-t151zg"
            />
            Test string content
          </div>
        </div>
      </body>
    `)
  })

  it('should render correctly using children of type string', () => {
    const reactNodeProps = {
      children: <div>Test React Node content</div>,
    }
    const component = render(<ShineWrapper {...reactNodeProps} />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="ShineWrapper css-i07e5e"
          >
            <div
              class="Shine css-t151zg"
            />
            <div>
              Test React Node content
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
