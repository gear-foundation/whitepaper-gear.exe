---
title: Security and Executor Selection
sidebar_position: 3
description: ''
---

Regardless of the integration approach, Executors are critical to Gear.exe’s operation. Their selection and management
are governed by a decentralized re-staking mechanism facilitated by the [Symbiotic Protocol](https://symbiotic.fi/).
This process ensures that Gear.exe maintains a secure and scalable compute network by dynamically managing the set of
Executors responsible for program execution.

Symbiotic Protocol provides the infrastructure for this election process, serving as an exchange hub for three primary
stakeholders: **stakers**, **operators**, and the Gear.exe **network** itself. Together, these actors create a robust
and decentralized Executor selection mechanism tailored specifically to Gear.exe’s requirements.

## Executor Selection Workflow

Gear.exe configures the operator set, establishing parameters such as staking limits and the maximum allowable stake for
individual operators. Operators, who run Executor nodes, are elected based on their ability to attract stakers who
delegate collateral (e.g., ERC-20 wrapped VARA tokens) to them. This delegated stake determines their eligibility to
serve as active Executors. The list of active Executors is continuously updated and pushed to the Router Contract, which
governs Gear.exe’s decentralized compute infrastructure.
Key elements of the selection process include:

1. Stake Allocation: Gear.exe establishes operator sets, defines staking requirements, and locks stake amounts for
   predefined epochs to maintain network stability.
2. Symbiotic Vault Integration: Vaults manage the staking process, allocate collateral to operators, and enforce
   strategies specific to Gear.exe’s execution needs.

## Key Actors in Gear.exe Executor Selection

- **Gear.exe Network:** Defines the decentralized infrastructure required to execute programs, configures operator sets,
  and establishes staking parameters. Gear.exe also ensures that stakers and operators are appropriately rewarded for
  their contributions.
- **Stakers:** Provide economic security by delegating collateral to operators. In return, they receive a share of the
  rewards distributed by Gear.exe.
- **Operators:** Operate Executor nodes to execute programs on Gear.exe. They benefit from Symbiotic Protocol’s ability
  to pool stakes across multiple stakers, enabling efficient security for Gear.exe without requiring isolated
  infrastructure for each staker.
- **Vaults:** Act as intermediaries in the staking process, handling deposits, withdrawals, and slashing events. Vaults
  also distribute staking rewards based on performance and provide historical data for external reward contracts.

## Rewards and Incentives

Gear.exe ensures that stakers and operators are properly incentivized for their roles within the network. Rewards are
calculated off-chain by Gear.exe, which generates a Merkle tree structure to facilitate secure and transparent claims by
participants. The rewards are divided into:

- **Operator Rewards:** For maintaining and running Executor nodes.
- **Staker Rewards:** For providing the collateral that secures Gear.exe’s operations.

This flexible reward logic allows Gear.exe to adapt its incentive structure as needed, ensuring long-term
sustainability.

## Slashing and Misbehavior

Symbiotic incorporates a robust slashing mechanism to deter malicious behavior. If an Executor produces inaccurate
results or engages in misconduct, the Gear.exe network can initiate a slashing request to Symbiotic. Symbiotic’s *
*Slasher module** validates these requests and enforces penalties by reducing the stake of the offending operator. This
ensures economic accountability and strengthens the overall integrity of the network.

## Attracting Executors

Running a Gear.exe node is designed to be mutually beneficial for operators and stakers. With the added appeal of
rewards and the flexibility provided by Symbiotic’s Vault and staking mechanisms, many Vara validators are expected to
run their own Gear.exe nodes, further bolstering the network’s security and scalability.
