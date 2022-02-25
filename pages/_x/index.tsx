import { Divider, Header, Segment, Table, Icon } from "semantic-ui-react";
import db from "../../utils/db";
import TimeAgo from "timeago-react";

import Link from "next/link";
import Libre from "../../components/Libre";
import DefaultLayout from "../../layouts/Default";

export default function List({ requests }) {
  return (
    <DefaultLayout title={"List"}>
      <Header as="h1" icon textAlign="center" style={{ marginBottom: "1em" }}>
        <Libre />
        <br />
        List
        <br />
        <Header.Subheader>
          <b>All requests stored to date</b>
          <br />
        </Header.Subheader>
      </Header>
      <Divider />
      {requests.length ? (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>URL</Table.HeaderCell>
              <Table.HeaderCell>When</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {requests.map((request) => (
              <Table.Row key={`row_${request.id}`}>
                <Table.Cell>
                  <Link href={`/_x/${request.id}`}>
                    <a>{request.url}</a>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <TimeAgo datetime={request.created_at} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <Segment placeholder>
          <Header icon>
            <Icon name="search" />
            No requests made to <b>wrestly</b> yet...
          </Header>
        </Segment>
      )}
    </DefaultLayout>
  );
}

export async function getServerSideProps(ctx) {
  const database = await db();
  const requests = await database("requests")
    .select(["id", "created_at", "url"])
    .orderBy("created_at", "desc");
  return {
    props: { requests },
  };
}
