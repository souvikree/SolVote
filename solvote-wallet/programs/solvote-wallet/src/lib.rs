use anchor_lang::prelude::*;

// Define the program ID
declare_id!("BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu");

#[program]
pub mod solvote_wallet {
    use super::*;

    pub fn create_poll(ctx: Context<CreatePoll>, question: String, options: Vec<String>) -> Result<()> {
        let poll = &mut ctx.accounts.poll;

        // Ensure that the question and options do not exceed maximum size
        require!(question.len() <= 128, CustomError::QuestionTooLong);
        require!(options.len() <= 10, CustomError::OptionsTooMany);

        // Initialize the `Poll` account
        poll.question = question;
        poll.options = options;
        poll.votes = vec![0; poll.options.len()]; // Initialize votes to zero

        Ok(())
    }

    pub fn vote(ctx: Context<Vote>, option_index: u8) -> Result<()> {
        let poll = &mut ctx.accounts.poll;

        // Ensure the option_index is within bounds
        require!(option_index < poll.votes.len() as u8, CustomError::InvalidOptionIndex);

        // Increment the vote count for the selected option
        poll.votes[option_index as usize] += 1;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePoll<'info> {
    #[account(init, payer = user, space = Poll::LEN)]
    pub poll: Account<'info, Poll>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut)]
    pub poll: Account<'info, Poll>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct Poll {
    pub question: String, // Use String for dynamic length
    pub options: Vec<String>, // Use Vec for dynamic length
    pub votes: Vec<u64>, // Use Vec for dynamic length
}

impl Poll {
    const LEN: usize = 8 + 4 + 256 + 4 + 1024; // Adjust according to your account size needs
}

#[error_code]
pub enum CustomError {
    #[msg("The provided question is too long.")]
    QuestionTooLong,

    #[msg("Too many options provided.")]
    OptionsTooMany,

    #[msg("Failed to initialize votes.")]
    VotesInitializationFailed,

    #[msg("The selected option index is invalid.")]
    InvalidOptionIndex,
}
