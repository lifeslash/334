# 334
## Description
This code is a sample of trigger of Google Apps Script by the minutes.
This code tweet text at 3:34 every day.

## Setup
### Twitter
Go to [Twitter Application Management](https://apps.twitter.com/), and make new twitter application.
You need to set callback URL of your application to *"https://spreadsheets.google.com/macros"*.

After that, you rewrite the *CONSUMER_KEY* and  *CONSUMER_SECRET* to two of your application.
*PROJECT_KEY* is your project key of Google Apps Script.

### Trigger
Set the trigger of *"makeTrigger()"*.
- Time based trigger
- Daily
- Other than 3 AM
