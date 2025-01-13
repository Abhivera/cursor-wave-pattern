# Cursor Wave Pattern

A React component that creates an interactive wave pattern that follows and responds to cursor movement. The pattern creates a dynamic, fluid animation that responds to both cursor position and time.

![Cursor Wave Pattern Demo](https://your-demo-gif-url.gif)

## Features

- 🌊 Smooth wave animations that follow cursor movement
- ⚡ Highly performant with requestAnimationFrame
- 🎨 Fully customizable colors, sizes, and wave parameters
- 📱 Responsive design that works on any screen size
- 💪 Written in TypeScript with full type support
- 🎯 Zero dependencies (except React)

## Installation

```bash
# Using npm
npm install cursor-wave-pattern

# Using yarn
yarn add cursor-wave-pattern

# Using pnpm
pnpm add cursor-wave-pattern
```

## Basic Usage

```jsx
import { CursorWavePattern } from 'cursor-wave-pattern';

function App() {
  return (
    <CursorWavePattern />
  );
}
```

## Advanced Usage

The component accepts several props for customization:

```jsx
import { CursorWavePattern } from 'cursor-wave-pattern';

function App() {
  return (
    <CursorWavePattern 
      // Customize the grid
      gridSize={20}
      spacing={40}
      
      // Adjust wave behavior
      waveSpeed={0.05}
      primaryWaveFrequency={0.05}
      secondaryWaveFrequency={0.02}
      cursorInfluenceRadius={200}
      
      // Customize appearance
      backgroundColor="rgb(17, 24, 39)"
      dotColor="rgb(96, 165, 250)"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gridSize` | `number` | `20` | Number of dots in each row/column |
| `spacing` | `number` | `40` | Space between dots in pixels |
| `waveSpeed` | `number` | `0.05` | Speed of wave animation |
| `primaryWaveFrequency` | `number` | `0.05` | Frequency of primary wave |
| `secondaryWaveFrequency` | `number` | `0.02` | Frequency of secondary wave |
| `cursorInfluenceRadius` | `number` | `200` | Radius of cursor influence in pixels |
| `backgroundColor` | `string` | `"rgb(17, 24, 39)"` | Background color of the container |
| `dotColor` | `string` | `"rgb(96, 165, 250)"` | Color of the dots |

## Examples

### Basic Wave Pattern
```jsx
import { CursorWavePattern } from 'cursor-wave-pattern';

function BasicExample() {
  return (
    <CursorWavePattern />
  );
}
```

### Custom Colors
```jsx
function CustomColorExample() {
  return (
    <CursorWavePattern 
      backgroundColor="rgb(0, 0, 0)"
      dotColor="rgb(255, 99, 71)"
    />
  );
}
```

### Fast Waves
```jsx
function FastWaveExample() {
  return (
    <CursorWavePattern 
      waveSpeed={0.1}
      primaryWaveFrequency={0.08}
      secondaryWaveFrequency={0.04}
    />
  );
}
```

### Dense Pattern
```jsx
function DensePatternExample() {
  return (
    <CursorWavePattern 
      gridSize={30}
      spacing={20}
      cursorInfluenceRadius={150}
    />
  );
}
```

### Full Screen Background
```jsx
function BackgroundExample() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <CursorWavePattern />
      <div style={{ position: 'relative', zIndex: 1 }}>
        Your content here
      </div>
    </div>
  );
}
```

## Development

To modify the package locally:

```bash
# Clone the repository
git clone https://github.com/Abhivera/cursor-wave-pattern.git

# Install dependencies
cd cursor-wave-pattern
npm install

# Start development
npm run dev

# Build the package
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © Abhivera

## Support

If you need help or have any questions:

1. Check the [Issues](https://github.com/Abhivera/cursor-wave-pattern/issues) page
2. Create a new issue
3. Reach out on [Twitter](https://twitter.com/yourusername)

---

Made with ❤️ by [Your Name]