# React Device Layouts

This is a little package in which you can wrap your projects, proof of concepts and demos and display it in a certain device.

> Note: The device is only for display purposes, not an actual device which can emulate a real world device.

## Installation

```bash
npm i react-device-layouts
```

## Usage

```
import { PhoneLayout } from 'react-device-layouts';

const PageLayout: React.FC = () => (
<AppContainer>
  <PhoneLayout>
    Your content goes here ...
  </PhoneLayout>
</AppContainer>
)

export default PageLayout
```

## Props

The only props required are `children: React.ReactNode`

## Example

![image](https://user-images.githubusercontent.com/27015528/149282962-2fdf4f2e-c00f-4b35-9077-4a8f05e50075.png)

## Devices

- iPhone SE

## Future

- More devices are planned in future which should include more mobile, tablet and desktop devices
- Colour customisation for the device by passing props
