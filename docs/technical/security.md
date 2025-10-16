---
title: Security and Executor Selection
sidebar_position: 3
---

Regardless of the integration approach, Executors are critical to Vara.eth's operation. Their selection and management
are governed by a decentralized re-staking mechanism facilitated by the [Symbiotic Protocol](https://symbiotic.fi/).
This process ensures that Vara.eth maintains a secure and scalable compute network by dynamically managing the set of
Executors responsible for program execution.

Symbiotic Protocol provides the infrastructure for this election process, serving as an exchange hub for three primary
stakeholders: **stakers**, **operators**, and the Vara.eth **network** itself. Together, these actors create a robust
and decentralized Executor selection mechanism tailored specifically to Vara.eth's requirements.

## Security Modes

Vara.eth is designed with two complementary security modes that applications can choose based on their needs:

**Liquid Restaking-Powered PoS**  
Enables security for internal Vara.eth consensus while reducing overhead in many cases, leveraging VARA token staking and delegation for efficient validation. This mode is detailed throughout this section.

**ZK-Verified Mode**  
Uses zero-knowledge proofs to maintain full Ethereum-equivalent security, ensuring every computation is cryptographically verified on mainnet. This mode provides the highest level of security guarantees for applications requiring trustless verification.

Both modes run on decentralized, permissionless infrastructure using consumer-grade hardware. This dual approach links the economic security of Vara Network with Ethereum while giving developers flexibility in security-performance trade-offs.

## Executor Selection Workflow

Vara.eth configures the operator set, establishing parameters such as staking limits and the maximum allowable stake for
individual operators. Operators, who run Executor nodes, are elected based on their ability to attract stakers who
delegate collateral (**e.g., ERC-20 representations of VARA or other supported assets**) to them. This delegated stake
determines their eligibility to serve as active Executors. Once elected, operators participate in program execution and sign results collectively, which are then finalized by the Router Contract.
The list of active Executors is continuously updated and pushed to the Router Contract, which governs Vara.eth's decentralized compute infrastructure.

Key elements of the selection process include:

1. Stake Allocation: Vara.eth establishes operator sets, defines staking requirements, and locks stake amounts for
   predefined epochs to maintain network stability.
2. Symbiotic Vault Integration: Vaults manage the staking process, allocate collateral to operators, and enforce
   strategies specific to Vara.eth's execution needs.

## Key Actors in Vara.eth Executor Selection

- **Vara.eth Network:** Defines the decentralized infrastructure required to execute programs, configures operator sets,
  and establishes staking parameters. Vara.eth also ensures that stakers and operators are appropriately rewarded for
  their contributions.
- **Stakers:** Provide economic security by delegating collateral to operators. In return, they receive a share of the
  rewards distributed by Vara.eth.
- **Operators:** Operate Executor nodes to execute programs on Vara.eth. They benefit from Symbiotic Protocol's ability
  to pool stakes across multiple stakers, enabling efficient security for Vara.eth without requiring isolated
  infrastructure for each staker.
- **Vaults:** Act as intermediaries in the staking process, handling deposits, withdrawals, and slashing events. Vaults
  also distribute staking rewards based on performance and provide historical data for external reward contracts.

## Rewards and Incentives

Vara.eth ensures that stakers and operators are properly incentivized for their roles within the network. Rewards are
calculated off-chain by Vara.eth, which generates a Merkle tree structure to facilitate secure and transparent claims by
participants. The rewards are divided into:

- **Operator Rewards:** For maintaining and running Executor nodes.
- **Staker Rewards:** For providing the collateral that secures Vara.eth's operations.

This flexible reward logic allows Vara.eth to adapt its incentive structure as needed, ensuring long-term
sustainability.

## Slashing and Misbehavior

Symbiotic incorporates a robust slashing mechanism to deter malicious behavior. If an Executor produces inaccurate
results or engages in misconduct, a special Middleware contract can initiate a slashing request to Symbiotic. Symbiotic's
**Slasher module** validates these requests and enforces penalties by reducing the stake of the offending operator or
validator. This ensures economic accountability and strengthens the overall integrity of the network.

## Attracting Executors

Running a Vara.eth node is designed to be mutually beneficial for operators and stakers. With the added appeal of
rewards and the flexibility provided by Symbiotic's Vault and staking mechanisms, many Vara validators are expected to
run their own Vara.eth nodes, further bolstering the network's security and scalability.
