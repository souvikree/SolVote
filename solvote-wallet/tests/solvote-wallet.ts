import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolvoteWallet } from "../target/types/solvote_wallet";
import { SystemProgram } from "@solana/web3.js";

describe("solvote-wallet", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolvoteWallet as Program<SolvoteWallet>;

  it("Creates and interacts with a poll", async () => {
    // Generate a new Keypair for the poll account
    const pollAccount = anchor.web3.Keypair.generate();

    // Define the poll question and options
    const question = "What is your favorite color?"; // Ensure this is within the size limit
    const options = ["Red", "Blue", "Green"];
    console.log("Question length:", Buffer.byteLength(question, 'utf8'));

    // Create the poll
    try {
      const tx = await program.methods.createPoll(question, options)
        .accounts({
          poll: pollAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([pollAccount])
        .rpc();
        
      console.log("Poll creation transaction signature", tx);

      // Verify that the poll was created correctly
      const poll = await program.account.poll.fetch(pollAccount.publicKey);
      console.log("Poll account data:", poll);

      // Example of how to vote
      const optionIndex = 1; // Index of the option to vote for (e.g., Blue)
      const voteTx = await program.methods.vote(optionIndex)
        .accounts({
          poll: pollAccount.publicKey,
          user: provider.wallet.publicKey,
        })
        .rpc();

      console.log("Vote transaction signature", voteTx);

      // Verify the vote was counted
      const updatedPoll = await program.account.poll.fetch(pollAccount.publicKey);
      console.log("Updated poll account data:", updatedPoll);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
});
