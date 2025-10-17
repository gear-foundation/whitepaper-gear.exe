---
title: Glossary
sidebar_position: 9
---

### Actor Model

A computational model where individual components, called actors, operate independently and communicate with each other
through messages. This approach enables parallel processing and high scalability, which are integral to Vara.eth's
architecture.

### Archive Node

An Ethereum node that stores the complete history of the blockchain, including all past states and transactions. Unlike
full nodes, which only maintain the current state and recent transaction data, archive nodes retain historical data that
allows developers and applications to access detailed information about any block or state from the chain's entire
history. Archive nodes are essential for tasks like querying historical balances, accessing older smart contract states,
or retrieving blobs uploaded for off-chain processing, as utilized by Vara.eth.

### Based Rollups

A type of Layer-2 scaling solution that relies directly on Layer-1 protocols for sequencing and data availability.
Unlike traditional rollups that use dedicated infrastructure, based rollups integrate deeply with the underlying
blockchain, leveraging its decentralization and security guarantees. This alignment with Layer-1 simplifies operations
by removing the need for native tokens or separate trust assumptions. While based rollups benefit from Ethereum's
censorship resistance and robust consensus, they inherit its limitations, such as slower transaction finality and shared
scalability constraints. Additionally, transaction flexibility is often reduced because sequencing and execution must
conform to Layer-1 rules.

### Blob

A large binary object stored on the Ethereum network as part of a transaction. In Vara.eth, Wasm code is uploaded as a
blob, which resides outside Ethereum's main state but is accessible via archive nodes.

### dApp (Decentralized Application)

A software application that runs on a blockchain or decentralized network. dApps are powered by smart contracts and
provide users with transparent and trustless interactions without relying on centralized servers.

### Executor

A decentralized node within the Vara.eth network responsible for executing Wasm programs. Executors retrieve programs,
perform computations, and generate signed results, ensuring the network's reliability and scalability.

### Executable Balance

A dedicated balance maintained by a Gear program to cover execution costs. Each time the program processes a message, a portion of this balance is consumed and later distributed to Executors and stakers. If the Executable Balance reaches zero, the program becomes inactive until replenished.

### Finality

The point at which a transaction or computational result is considered immutable and irreversible. On Ethereum, finality
typically occurs after ~12.8 minutes, but Vara.eth enhances this by providing pre-confirmation mechanisms for
near-instant feedback.

### Gear Protocol

The foundational framework behind Vara.eth that supports the creation and execution of Wasm programs. It provides the
tools and runtime environment necessary for decentralized computation.

### IDL (Interface Definition Language)

A file that describes the structure and interface of a Wasm program. Developers use IDL files to define how their Gear
programs interact with external systems or smart contracts.

### Mirror Contract

A smart contract deployed on Ethereum to act as an interface for a Gear program. Mirror Contracts enable communication
between the Ethereum blockchain and off-chain computations performed on Vara.eth.

### Mirror ABI Interface

The ABI (Application Binary Interface) exposed by Mirror Contracts on Ethereum. This interface allows Ethereum tools and dApps (e.g., MetaMask, Etherscan) to interact with Gear programs natively, without the need for additional encoding/decoding, by treating them as standard Ethereum smart contracts. Mirror ABI Interfaces act as a transparent proxy layer for Gear programs.

### Middleware

A specialized contract that links the Router Contract with the Symbiotic Protocol. It manages responsibilities such as key registration, updates, and validator/operator accountability, including slashing requests. Middleware ensures secure coordination between execution results and staking economics.

### Optimistic Rollups

A type of Layer-2 scaling solution that processes transactions off-chain and periodically posts summarized data (state
roots) back to the Ethereum mainnet. Optimistic Rollups operate under the assumption that transactions are valid (
"optimistically") unless proven otherwise. To ensure security, they include a challenge period during which anyone can
submit fraud proofs to contest invalid transactions. This mechanism provides scalability but introduces delays in
transaction finality due to the need for a dispute resolution window.

### Operator

An entity responsible for running Executor nodes within the Vara.eth network. Operators are elected through the Symbiotic Protocol based on delegated stake and are accountable for reliable execution. They represent the economic and operational counterpart to Executors.

### Pre-confirmation Mechanism

A feature in Vara.eth that provides computation results immediately after execution, even before the associated
transaction is finalized in an Ethereum block. This enables faster feedback for latency-sensitive applications.

### Reverse-Gas Model

An approach where developers cover transaction fees for end users, enabling dApps to deliver a seamless user experience.
This model is supported by Vara.eth, allowing dApp developers to adopt monetization strategies similar to those used in
Web2 applications.

![Reverse gas](/img/reverse-gas.png)

### Router Contract

The central smart contract in Vara.eth's architecture that coordinates interactions between Ethereum and the Vara.eth
network. It handles program uploads, execution results, and state transitions.

### Shared Storage

A blockchain or Layer-2 design feature where all participating nodes or entities share access to a unified state,
including data and smart contract storage. This approach ensures consistency and transparency across the network but can
limit scalability due to bottlenecks in data retrieval and update operations. Shared storage is a hallmark of
traditional blockchains like Ethereum and many rollup solutions, where all transactions and state changes must be
reflected across the network. Vara.eth avoids shared storage, instead decentralizing computations and managing state
transitions dynamically through its architecture, enabling greater efficiency and scalability.

### Slashing

A mechanism that penalizes Executors for malicious behavior or poor performance by reducing their staked collateral.
This process ensures the economic accountability of Vara.eth participants and maintains the network's integrity.

### Solidity

A high-level, object-oriented programming language specifically designed for writing smart contracts on blockchain
platforms like Ethereum. It allows developers to define and implement the logic that powers decentralized applications (
dApps).

### Symbiotic Protocol

A decentralized restaking system used by Vara.eth to select and manage Executors. It facilitates staking, distributes
rewards, and enforces penalties, ensuring a secure and scalable compute network.

### Vaults

Intermediaries in the Symbiotic Protocol that manage the staking process for Executors. Vaults handle deposits,
withdrawals, and rewards, as well as enforce slashing policies.

### Wasm (WebAssembly)

A high-performance, lightweight binary format for executing code. Vara.eth uses Wasm programs to run decentralized
computations efficiently and securely.

### ZK Rollups (Zero-Knowledge Rollups)

A Layer-2 scaling solution that uses zero-knowledge proofs to validate transactions off-chain and post verified
summaries on-chain. ZK Rollups employ cryptographic proofs (such as zk-SNARKs or zk-STARKs) to ensure the correctness of
the batch without revealing the underlying transaction data. This approach enhances scalability, reduces gas costs, and
offers faster finality compared to Optimistic Rollups, but at the cost of higher computational demands for generating
proofs.

### ZK-Verified Mode

A security mode in Vara.eth that uses zero-knowledge proofs to maintain full Ethereum-equivalent security. In this mode, every computation is cryptographically verified on mainnet, providing the highest level of security guarantees for applications requiring trustless verification.
