---
title: Glossary
sidebar_position: 9
---

### Actor Model
A computational model where individual components, called actors, operate independently and communicate with each other through messages. This approach enables parallel processing and high scalability, which are integral to Gear.exe’s architecture.

### Archive Node
An Ethereum node that stores the complete history of the blockchain, including all past states and transactions. Unlike full nodes, which only maintain the current state and recent transaction data, archive nodes retain historical data that allows developers and applications to access detailed information about any block or state from the chain’s entire history. Archive nodes are essential for tasks like querying historical balances, accessing older smart contract states, or retrieving blobs uploaded for off-chain processing, as utilized by Gear.exe.

### Based Rollups
A type of Layer-2 scaling solution that relies directly on Layer-1 protocols for sequencing and data availability. Unlike traditional rollups that use dedicated infrastructure, based rollups integrate deeply with the underlying blockchain, leveraging its decentralization and security guarantees. This alignment with Layer-1 simplifies operations by removing the need for native tokens or separate trust assumptions. While based rollups benefit from Ethereum’s censorship resistance and robust consensus, they inherit its limitations, such as slower transaction finality and shared scalability constraints. Additionally, transaction flexibility is often reduced because sequencing and execution must conform to Layer-1 rules.

### Blob
A large binary object stored on the Ethereum network as part of a transaction. In Gear.exe, Wasm code is uploaded as a blob, which resides outside Ethereum’s main state but is accessible via archive nodes.

### Decoder Contract
An optional smart contract that translates data between Gear.exe and Ethereum. It encodes input data for Gear programs and decodes their output into formats readable by Ethereum tools like Etherscan.

### dApp (Decentralized Application)
A software application that runs on a blockchain or decentralized network. dApps are powered by smart contracts and provide users with transparent and trustless interactions without relying on centralized servers.

### Executor
A decentralized node within the Gear.exe network responsible for executing Wasm programs. Executors retrieve programs, perform computations, and generate signed results, ensuring the network’s reliability and scalability.

### Finality
The point at which a transaction or computational result is considered immutable and irreversible. On Ethereum, finality typically occurs after ~12.8 minutes, but Gear.exe enhances this by providing pre-confirmation mechanisms for near-instant feedback.

### Gear Protocol
The foundational framework behind Gear.exe that supports the creation and execution of Wasm programs. It provides the tools and runtime environment necessary for decentralized computation.

### IDL (Interface Definition Language)
A file that describes the structure and interface of a Wasm program. Developers use IDL files to define how their Gear programs interact with external systems or smart contracts.

### Mirror Contract
A smart contract deployed on Ethereum to act as an interface for a Gear program. Mirror Contracts enable communication between the Ethereum blockchain and off-chain computations performed on Gear.exe.

### Optimistic Rollups
A type of Layer-2 scaling solution that processes transactions off-chain and periodically posts summarized data (state roots) back to the Ethereum mainnet. Optimistic Rollups operate under the assumption that transactions are valid (“optimistically”) unless proven otherwise. To ensure security, they include a challenge period during which anyone can submit fraud proofs to contest invalid transactions. This mechanism provides scalability but introduces delays in transaction finality due to the need for a dispute resolution window.

### Pre-confirmation Mechanism
A feature in Gear.exe that provides computation results immediately after execution, even before the associated transaction is finalized in an Ethereum block. This enables faster feedback for latency-sensitive applications.

### Reverse-Gas Model
An approach where developers cover transaction fees for end users, enabling dApps to deliver a seamless user experience. This model is supported by Gear.exe, allowing dApp developers to adopt monetization strategies similar to those used in Web2 applications.

<img src="/img/reverse-gas.png"  alt="Reverse gas"/>

### Router Contract
The central smart contract in Gear.exe’s architecture that coordinates interactions between Ethereum and the Gear.exe network. It handles program uploads, execution results, and state transitions.

### Sequencer
A component in Gear.exe that aggregates execution results from multiple Executors and submits them to Ethereum as a single batch. The Sequencer ensures efficient synchronization between off-chain computations and on-chain state updates.

### Shared Storage
A blockchain or Layer-2 design feature where all participating nodes or entities share access to a unified state, including data and smart contract storage. This approach ensures consistency and transparency across the network but can limit scalability due to bottlenecks in data retrieval and update operations. Shared storage is a hallmark of traditional blockchains like Ethereum and many rollup solutions, where all transactions and state changes must be reflected across the network. Gear.exe avoids shared storage, instead decentralizing computations and managing state transitions dynamically through its architecture, enabling greater efficiency and scalability.

### Slashing
A mechanism that penalizes Executors for malicious behavior or poor performance by reducing their staked collateral. This process ensures the economic accountability of Gear.exe participants and maintains the network’s integrity.

### Solidity
A high-level, object-oriented programming language specifically designed for writing smart contracts on blockchain platforms like Ethereum. It allows developers to define and implement the logic that powers decentralized applications (dApps).

### Symbiotic Protocol
A decentralized restaking system used by Gear.exe to select and manage Executors. It facilitates staking, distributes rewards, and enforces penalties, ensuring a secure and scalable compute network.

### Vaults
Intermediaries in the Symbiotic Protocol that manage the staking process for Executors. Vaults handle deposits, withdrawals, and rewards, as well as enforce slashing policies.

### Wasm (WebAssembly)
A high-performance, lightweight binary format for executing code. Gear.exe uses Wasm programs to run decentralized computations efficiently and securely.

### ZK Rollups (Zero-Knowledge Rollups)
A Layer-2 scaling solution that uses zero-knowledge proofs to validate transactions off-chain and post verified summaries on-chain. ZK Rollups employ cryptographic proofs (such as zk-SNARKs or zk-STARKs) to ensure the correctness of the batch without revealing the underlying transaction data. This approach enhances scalability, reduces gas costs, and offers faster finality compared to Optimistic Rollups, but at the cost of higher computational demands for generating proofs.
