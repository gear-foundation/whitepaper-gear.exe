---
title: Economic Model
sidebar_position: 4
---

Gear.exe’s economic model is built to support scalable, efficient, and sustainable decentralized applications (dApps).
It introduces mechanisms like the **reverse gas model** and a **dual-balance system**, enabling programs to operate
seamlessly while maintaining cost transparency and flexibility.

## Fundamental Aspects

### Reverse Gas Model

Gear.exe uses a reverse gas model, where the cost of executing a program is deducted from the program’s **Executable
Balance** instead of being paid by the user. This means users only pay the Ethereum transaction fee (in ETH) for sending
messages to Mirror Contracts, while the computational costs of Gear program execution are covered by the program itself.
This approach simplifies interactions for users and makes programs more accessible.

### Dual-Balance System

Programs in Gear.exe maintain two types of balances:

- **Executable Balance:** Dedicated to execution costs. If this balance is zero, the program cannot process messages.
- **Free Balance:** Serves as a wallet for funds earned or deposited into the program. These funds can be withdrawn by
  the program creator or converted into Executable Balance if the program’s logic permits.

### Funding Mechanisms

Programs in Gear.exe maintain their Executable Balance through multiple methods:

- **Developer or Sponsor Funding:** The program creator or external sponsors can directly top up the Executable Balance
  via Ethereum transactions, ensuring the program remains operational without requiring user contributions.
- **Revenue-Based Replenishment:** Programs can replenish their Executable Balance using revenue generated through
  operational activities, such as fees, commissions, or trading spreads.
- **User-Driven Contributions:** Programs may be designed to accept small payments (value) from users as part of their
  interactions. A portion of these payments can be converted into Executable Balance, creating a self-sustaining model
  for the program.

### Executor Rewards

When a program executes, the consumed portion of its Executable Balance is deducted and recorded in the Router Contract. These funds are later distributed to Executors and proportionally shared with stakers who delegated collateral, incentivizing reliable computation and maintaining network security.

### Transparency and Tracking

Developers and users can query the current Executable Balance of a program via RPC calls using the program’s state hash.
Mirror Contracts publish the program’s state commitment, which can be queried to verify balances and execution costs».

## Economic Patterns

Developers can design their programs to follow various economic patterns based on their application’s goals and revenue
model:

- **Patron Model:** The program creator funds the Executable Balance, allowing users to interact with the program for
  free.
- **Revenue-Supported Model:** The program generates income (e.g., through fees or commissions) and uses part of this
  revenue to replenish its Executable Balance.
- **User-Paid Execution:** Users include a small value with their messages, which is converted into Executable Balance,
  enabling the program to fund itself through user interactions.

## Advantages of the Model

- **Clear Cost Allocation:** Users pay only for sending Ethereum transactions, while programs handle computational
  costs. This distinction simplifies budgeting and encourages dApp adoption.
- **Adaptability:** Developers can implement various funding strategies, tailoring the economic structure to the
  specific needs of their application.
- **Resource Optimization:** The reverse gas model ensures efficient use of program funds, with balances directly linked
  to execution and general-purpose needs.
- **Network Incentives:** Executors are rewarded for computation, promoting a robust and secure decentralized execution
  environment.
