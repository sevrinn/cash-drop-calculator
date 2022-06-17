# Cash Drop Calculator

## The Problem to Solve
Bar managers at the company need a quick, fool-proof way to count, sum, round up/down and truncate the change off their cash drop at the end of every night. 

## Solution
To solve this, I am trying to build a small webapp that uses the Square API to access the transaction data from a specified range of time and location. This app should grab this list of transactions, filter just the cash transactions, sum them, round the result and truncate off the change. This final result will then be shown to the user (bar manager) on the front end of the app. 

This assumes they are correctly entering the amount of cash they recieve for every transaction. (Need to get more info on how this is done on their end.)

This assumes user is selecting the correct location (and time?)

### Task List
Interface
- [x] Header logo and "instructions" button
- [ ] instructions panel 
- [ ] link instructions button and panel to toggle show/hide
- [ ] selection input with the name of bars (hardcoded for now)
- [ ] time/date selector 
- [ ] connect css and js to html
- [ ] make decent with minimal css. can go hard on this later.
API
- [ ] ensure tokens are secure


