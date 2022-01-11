import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import HomeButton from '.'

afterEach(cleanup)

describe('HomeButton', () => {
  it('should render correctly', () => {
    const component = render(<HomeButton />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="HomeButton css-1rjlc35"
          >
            <div
              class="HomeButtonInner css-121quk9"
            />
          </div>
        </div>
      </body>
    `)
  })
})
