import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import Footer from '.'

afterEach(cleanup)

jest.mock('../HomeButton', () => {
  return (): JSX.Element => <div data-testid='fake-home-button' />
})

describe('Footer', () => {
  it('should render correctly', () => {
    const component = render(<Footer />)

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="Footer css-z0zv9q"
          >
            <div
              data-testid="fake-home-button"
            />
          </div>
        </div>
      </body>
    `)
  })
})
