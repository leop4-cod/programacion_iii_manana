import './App.css'
import CssGlobalDemo from './components/CssGlobalDemo'
import InlineStyleDemo from './components/InlineStyleDemo'
import CssModuleDemo from './components/CssModuleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import ThemeToggle from './components/ThemeToggle'
import ThemedPanel from './components/ThemedPanel'
import { ThemeProvider } from './theme/ThemeContext'


function App() {

  return (
    <ThemeProvider>
      <CssGlobalDemo />
      <InlineStyleDemo />
      <CssModuleDemo />
      <StyledComponentsDemo />
      <ThemeToggle />
      <ThemedPanel />
    </ThemeProvider>
  )
}

export default App