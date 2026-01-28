import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from 'primereact/button';


function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user ? user.username : ''}</h1>
          <Button severity="info" onClick={signOut}>Sign out</Button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
