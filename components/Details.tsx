import React, { useMemo } from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import DefaultLayout from "../layouts/Default";
import Link from "next/link";
import Libre from "./Libre";

const JSONHighlight = ({ body }) => (
  <SyntaxHighlighter wrapLines wrapLongLines language="json" style={dracula}>
    {JSON.stringify(JSON.parse(body), null, 2)}
  </SyntaxHighlighter>
);

const Details = ({ url, body, headers, cookies, method, query, id }) => {
  const { pathname } = useMemo(() => {
    const parsedUrl = new URL(`http://localhost${url}`);
    return {
      pathname: parsedUrl.pathname,
    };
  }, [url]);
  return (
    <DefaultLayout title={pathname}>
      <Container style={{ marginBottom: "5em" }}>
        <Header as="h1" icon textAlign="center" style={{ marginBottom: "1em" }}>
          <Libre />
          <br />
          <Link href={`/_x/${id}`}>
            <a>
              {pathname}
              <Header.Subheader>
                <b>{method}</b>
                <br />
              </Header.Subheader>
            </a>
          </Link>
        </Header>
        <Divider />
        <Header as="h2" textAlign="center">
          Query
        </Header>
        <JSONHighlight body={query} />
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
    </DefaultLayout>
  );
};

export default Details;
