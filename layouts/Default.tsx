import { Fragment } from "react";
import { Container, Segment, Header, List, Icon } from "semantic-ui-react";
import Head from "next/head";

const version = require("../package.json").version;

export default function DefaultLayout({ children, title }) {
  return (
    <Fragment>
      <Head>
        <title>Wrestly :: {title}</title>
      </Head>
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "3em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container style={{ flex: 1 }}>{children}</Container>

        <Segment
          inverted
          style={{ margin: "5em 0em 0em", padding: "4em 0em" }}
          vertical
        >
          <Container textAlign="center">
            <Header as="h3" inverted textAlign="center">
              Wrestly is made with 💪
              <Header.Subheader>version: {version}</Header.Subheader>
            </Header>
            <List horizontal inverted divided link size="small">
              <List.Item
                as="a"
                href="https://github.com/ventureharbour/wrestly"
              >
                <Icon name="code" style={{ marginRight: "0.5em" }} />
                Source
              </List.Item>
              <List.Item
                as="a"
                href="https://github.com/ventureharbour/wrestly/issues"
              >
                <Icon name="bug" style={{ marginRight: "0.5em" }} />
                Issues
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    </Fragment>
  );
}
