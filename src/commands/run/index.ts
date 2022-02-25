import { Command, Flags } from "@oclif/core";
import boot from "../../utils/server";

export default class Run extends Command {
  static description = "Run Wrestly";

  static flags = {
    port: Flags.string({
      char: "p",
      description: "Port to run on",
      default: "3000",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Run);
    const port = parseInt(flags.port);
    this.log("hello");
    await boot(port);
  }
}
