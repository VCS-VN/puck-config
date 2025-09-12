// Public library entrypoint
// Export only framework-agnostic pieces that consumers can use.

export { Provider } from '../components/ui/provider'
export { AppProvider } from '../components/ui/app-provider'

// Export the Puck block config to plug into @measured/puck
export { PuckConfig } from '../blocks/puck.config'

// Note: Avoid re-exporting all blocks to prevent type name collisions.
// Consumers can import blocks directly from their paths if needed.

export { PuckEditor } from './editor'
export { PuckRenderer } from './renderer'
