import { failure, HandleCommand, HandlerContext, HandlerResult, Success  } from "@atomist/automation-client";
import { CommandHandler } from "@atomist/automation-client/decorators";
import { SlackMessage } from "@atomist/slack-messages";

@CommandHandler("Deploy handler", "deploy")
export class DeployHandler implements HandleCommand {

  public handle(ctx: HandlerContext): Promise<HandlerResult> {
    return ctx.messageClient.respond("Running Lionel's magic deploy code")
      .then(() => Success, failure);
  }
}
