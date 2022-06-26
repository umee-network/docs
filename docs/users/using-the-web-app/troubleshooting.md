# Troubleshooting Errors

## "Out of Gas in Location"

![](<../.gitbook/assets/Out of gas in location.png>)

#### Solution:

Your gas limit is not high enough. Select "set gas" and manually enter an amount greater than the number after "gasUsed" before confirming the transaction.

![](<../.gitbook/assets/Increasing Gas (2).gif>)

## "Account Sequence Mismatch"

![](<../.gitbook/assets/Account Sequence Mismatch.png>)

#### Solution:

This error means that another transaction is still pending. Wait a minute and try the same transaction again. Patience is key - avoid spamming the same transaction.

## "Receiving Chain Height >= Packet Timeout Height"

![](<../.gitbook/assets/Packet timeout.png>)

#### Solution:

There are a number of ways this error may be resolved, including:

* Increasing your gas limit;
* Clearing cache;
* Disconnecting and reconnecting your device to the internet.
