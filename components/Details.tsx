import React, { Fragment, useMemo } from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Head from "next/head";
import Libre from "./Libre";

const JSONHighlight = ({ body }) => (
  <SyntaxHighlighter wrapLines wrapLongLines language="json" style={dracula}>
    {JSON.stringify(body, null, 2)}
  </SyntaxHighlighter>
);

const Details = ({ url, body, headers, cookies, method }) => {
  const { pathname, searchParams } = useMemo(() => {
    const parsedUrl = new URL(`http://localhost${url}`);
    const searchParams = {};
    parsedUrl.searchParams.forEach((v, k) => (searchParams[k] = v));
    return {
      pathname: parsedUrl.pathname,
      searchParams,
    };
  }, [url]);
  return (
    <Fragment>
      <Head>
        <title>Wrestly [ {pathname} ]</title>
      </Head>
      <Container style={{ marginTop: "2em", marginBottom: "5em" }}>
        <Header as="h1" icon textAlign="center" style={{ marginBottom: "1em" }}>
          <Libre />
          <br />
          {pathname}
          <Header.Subheader>
            <b>{method}</b>
          </Header.Subheader>
        </Header>
        <Divider />
        <Header as="h2" textAlign="center">
          Query
        </Header>
        <JSONHighlight body={searchParams} />
        <Header as="h2" textAlign="center">
          Body
        </Header>
        <JSONHighlight body={body} />
        <Header as="h2" textAlign="center">
          Headers
        </Header>
        <JSONHighlight body={headers} />
        <Header as="h2" textAlign="center">
          Cookies
        </Header>
        <JSONHighlight body={cookies} />
      </Container>

      <Segment
        inverted
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        vertical
      >
        <Container textAlign="center">
          <Header as="h3" inverted textAlign="center">
            made with 💪
          </Header>
        </Container>
      </Segment>
    </Fragment>
  );
};

export default Details;
