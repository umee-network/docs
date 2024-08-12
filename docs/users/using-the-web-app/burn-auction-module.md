# Burn Auction Module

## Navigation

![](/bg/burn-auction.png)

:::: tabs

::: tab 1

### Closing in

Displays the remaining time until the current auction concludes.

:::

::: tab 2

### Place your bid

The "Place Your Bid" section allows you to participate in the auction. You can bid in increments of 50 UX, with the minimum bid set at 50 UX.

:::

::: tab 3

### Auction Pool

Shows the assets included in the auction and their percentage distribution within the pool.

:::

::: tab 4

### Leaderboard

The leaderboard ranks addresses based on the total amount of UX tokens they've burned by participating in and winning auctions.

:::

::: tab 5

### Bidding History

The bidding history logs every bid placed in the current auction, showing the bidder, the bid amount, and the date of the bid.

:::

::: tab 6

### Auction Periods

This section provides a history of all previous auctions. Each auction entry includes a "details" button that reveals the winner, the auction pool contents, and the bidding history for that specific auction.

:::

::::

## UX Burn Auction Module

The Burn Auction Module introduces a unique model where UX holders can directly participate in acquiring collected protocol revenues while contributing to a deflationary tokenomic structure. This module aims to reduce the circulating supply of UX tokens, enhance token value, and create a rewarding experience for committed UX advocates.

The auction pool will be funded from three different sources:

- **Lending fee share:** this will strictly apply to the largest liquidity assets which naturally have the highest volumes (i.e. Atom, Celestia, USDC, USDT). The fee share ratio and targeted pools will be voted upon using 2 new x/leverage parameters (LeverageRevenueRate and LeveragePools).

- **mToken fees:** these will be allocated in their entirety.

- **Squid Router fees:** if an IBC transfer does not include fees, a commission will be taken and later exchanged for UX tokens which will also be burnt.

## Auction process

1. Before the Burn Auction starts, the protocol automatically collects a portion of the fees mentioned above. This variety becomes the “basket” for the current auction.

2. A 14-day auction starts, and anyone holding UX tokens can place a bid. Bidding means you commit a certain amount of your UX tokens.

3. When the auction period ends (initial 14 days), the person who commits the most UX tokens wins the entire “basket” reward.

4. The UX tokens from the winning bid are immediately and permanently removed from circulation (burned).

5. All other bids are fully returned to the initial bidders.

6. A new auction starts.

## Key considerations/ FAQs

- Why bid? Participating in the auction gives you the chance to acquire a collection of tokens that are part of the Umee ecosystem. The value of these tokens fluctuates over time.

- Each auction helps regulate the UX circulating supply. This regulation can positively contribute to the long-term health of the UX token.

- No bids? If an auction receives no bids, the collected tokens carry over to the next auction, increasing the potential size of the future basket.
