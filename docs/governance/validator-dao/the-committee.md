# The Committee

## What is the Validator DAO Committee?

The Umee Validator DAO Committee takes the responsibility of making delegation decisions each quarter. The committee reviews the validators' delegation applications, evaluates validators’ contributions and makes delegation decisions as a group.

Each contributing member of the Committee will be awarded 15,000 UMEE for their efforts at the end of each quarter.

> Umee community governance has the ability to vote to dissolve the Validator DAO Committee and call for a new one at any time if abuse is detected.

<br>

## Committee Formation

The formation of the Umee Validator DAO Committee will be determined by nominations submitted via the CommonWealth thread. The goal is to establish a reliable and consistent Committee that serves the requirements of the entire validator community.

<br>

## Committee responsibilities and tasks

1. The committee will evaluate validator node performance (timely upgrade, all modules running correctly, no downtime, no slashing, high governance participation)

   > The following guidelines will be used for node performance evaluation
   >
   > - 0 jail if 80% of validators have not incurred a jail event; in extreme circumstances, 1 jail if 80% of validators have incurred a jail event
   > - Healthy Peggo and Price Feeder
   > - Finish all network upgrades on time as needed
   > - Frequent voting

2. The Committee will review Validator Requests (VR) and assign Requests to validators if needed.

   - Validator Requests include:

     1. Perpetual requests include:

        1. Archival RPC nodes for mainnet: 2
        2. Pruned RPC nodes for mainnet: 2
        3. Archival RPC nodes for Canon2: 2
        4. Pruned RPC nodes for Canon2: 1
        5. Snapshot service: 2
        6. Testnet explorer: 1
        7. Relayers

           - Target networks and # of relayers:

             - 3 each for the below networks

               1. Cosmos Hub
               2. Axelar
               3. Osmosis
               4. Stride

           - 2 each for all the rest of the networks that have their native tokens listed on Umee + Crescent

        8. Peggo health checker/bot: 2
        9. Price feeder health checker/bot: 2
        10. IBC checker/bot: 2
        11. Validator monitoring and evaluation tool:

   > Validator Requests will not be frequently modified and the assigned validators are not expected to change often.

   > A list of ad hoc requests may be published in the 3rd month of each quarter, if any.

   > Number of assigned validators may change over time based on network needs

## Delegation Decisions

The Umee Validator DAO Committee evaluates the performance of the validators' nodes and makes delegation decisions based on their assessment of the validators' delegation applications.

Unless determined otherwise, each quarter there is a fixed delegation amount to grant to the validator applicants.

The committee is expected to reach a consensus and finalize delegation decisions for each validator by the end of the final month for each quarter’s end. Umee’s Core team will distribute the new foundation delegations within the first week of the new quarter.

<u>Validator Requests(VRs)</u>

An initial list of VRs is predetermined, including requests of relayer nodes, snapshot services. Volunteers can add themselves to this [sheet](https://docs.google.com/spreadsheets/d/1nckA2J5Fol2syQANKCdrM5OAiS0gzUn3gcjCgGMgDQU/edit?usp=sharing). The committee will assign the VRs based on the volunteers. Only assigned validators get additional delegation.

In the exception that any contributions is made outside the scope of the sheet, the Committee will make delegation decisions only if such contribution is deemed valuable.

Delegation made based on Validator Requests adheres the following guidelines:

- The Validator Committee proposes new Validator Requests on an as-needed basis
- If a contribution is deemed valuable and falls outside of the announced Validator Requests, it can be allocated retrospectively.

<br>

## Tier system

Delegation made based on **NODE PERFORMANCE** follows three tiers:

- Tier I: meet 95% of the performance requirements

- Tier II: meet 80% of the performance requirements; receive 70% of Tier I delegation

- Tier III: new validators; can receive eg 35% of Tier I delegation

## Committee Precautions

1. The Validator DAO Committee must have at least five eligible candidates nominated through the CommonWealth. If fewer than five eligible validators apply or are nominated, and a committee of five is not formed within the 96-hour period, the existing committee will be responsible for assigning delegations. If a committee of five is still not formed, the Validator DAO will be dissolved.

2. No foundation delegation will be given to the top 10 validators and the total number of foundation delegation recipients must be smaller than or equal to 87.

3. The Validator DAO Committee cannot allocate more than 8% of the total Umee Foundation delegation pool to any individual validator.

4. Each committee member has the right to veto any proposed decision. When there are **2** or more vetoes on any decision (validator selection, delegation amount, etc.) the decision is void and cannot pass until there are **at least 3 votes of approval and less than 2 vetoes**.
