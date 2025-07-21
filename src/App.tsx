import CMS from "./components/CMS";
import { ContactsProvider } from "./providers/ContactsProvider";

function App() {
  return (
    <ContactsProvider>
      <CMS />
    </ContactsProvider>
  );
}

export default App;
