# Troubleshooting Errors

## "Out of Gas in Location"

![](/bg/error-out-of-gas.png)

### Solution:

Your gas limit is not high enough. Select "set gas" and manually enter an amount greater than the number after "gasUsed" before confirming the transaction.

![](/bg/out-of-gas-solution.gif)

<br>

## "Account Sequence Mismatch"

![](/bg/error-account-sequence-mismatch.png)

### Solution:

This error means that another transaction is still pending. Wait a minute and try the same transaction again. Patience is key - avoid spamming the same transaction.

<br>

## "Receiving Chain Height >= Packet Timeout Height"

![](/bg/error-receiving-chain-height.png)

### Solution:

There are a number of ways this error may be resolved, including:

* Increasing your gas limit;
* Clearing cache;
* Disconnecting and reconnecting your device to the internet.