import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import { Title } from "@mantine/core";
function App() {
  // const [count, setCount] = useState(0);

  const myColor: MantineColorsTuple = [
    "#e2f8ff",
    "#cdecff",
    "#9dd5fd",
    "#69bdfa",
    "#40a9f8",
    "#269df7",
    "#1197f8",
    "#0083dd",
    "#0074c7",
    "#0064b1",
  ];

  const theme = createTheme({
    fontFamily: "Rubik, Roboto",
    colors: {
      myColor,
    },
  });

  return (
    <MantineProvider theme={theme}>
      <div style={{ backgroundColor: myColor[1], minHeight: "100vh" }}>
        <Title ta="center" fw={700} order={1}>
          TabbyCat
        </Title>
        {/* <h1 className="text-black">TabbyCat</h1> */}
      </div>
    </MantineProvider>
  );
}

export default App;
