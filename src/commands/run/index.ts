import { Command, Flags } from "@oclif/core";
import boot from "../../utils/server";

export default class Run extends Command {
  static description =
    "Run Wrestly. Creates a server where you can see all requests made, great for debugging Webhooks or receiving OAuth payloads!";

  static flags = {
    port: Flags.string({
      char: "p",
      description: "Port to run on. Defaults to 6789",
      default: "6789",
    }),
    database: Flags.string({
      char: "d",
      description:
        "Where to put the .sqlite file for backend. Defaults to in memory",
      default: ":memory:",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Run);
    const port = parseInt(flags.port);
    process.env.WRESTLY_DB = flags.database;
    await boot(port);
  }
}
