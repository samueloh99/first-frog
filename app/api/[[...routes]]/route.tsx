/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput, parseEther } from "frog";
import { handle } from "frog/next";

const app = new Frog({
  basePath: "/api",
  initialState: {
    index: 0,
  },
});

app.frame("/", (c) => {
  return c.res({
    action: "/submit",
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Select your favorite fruit:
      </div>
    ),
    intents: [
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="mango">Mango</Button>,
    ],
  });
});

app.frame("/submit", (c) => {
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        <h1>Sumbit page</h1>
      </div>
    ),
  });
});

export const GET = handle(app);
export const POST = handle(app);
