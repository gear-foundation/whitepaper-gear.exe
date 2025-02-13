---
title: Core Components
sidebar_position: 1
description: ''
---

Gear.exe redefines decentralized computation by operating as a P2P compute network rather than a standalone blockchain.
It eliminates the need to produce its own blocks or maintain a shared state, focusing solely on efficient and reliable
off-chain computation.
Gear.exe relies on several key components that enable its interaction with the Ethereum ecosystem and execution of
WASM-based programs. These components work together to provide a seamless, scalable, and efficient computational layer.

## Gear Programs

Gear.exe programs are developed as WASM modules using the [Gear Protocol](https://gear-tech.io/) framework, similar
to [Vara](https://vara.network/) programs.These programs enable developers to implement arbitrary logic tailored to
their applications.

Initially, programs are uploaded to Ethereum as “[blobs](/docs/glossary.md#blob)” — a form of data stored outside
Ethereum’s main state but accessible through [archive nodes](/docs/glossary.md#archive-node). This mechanism ensures
that large datasets can be efficiently stored without burdening the Ethereum network’s main state.
Each Gear program can allocate up to 2GB memory, allowing for the execution of highly complex computations, a capacity
that far exceeds the stricter memory constraints of Ethereum, Optimistic Rollups, Based Rollups, and ZK Rollups, which
are limited by gas and computational efficiency considerations. Once uploaded and verified, the program becomes
available for execution within the Gear.exe network.

The process for uploading a program involves the following steps:

1. **Blob Submission**: A dApp developer first submits the Wasm code as a blob to Ethereum. This generates a `code_id`,
   a unique hash that identifies the program throughout its lifecycle.
2. **Router Contract Notification**: After generating the `code_id`, the developer calls the `UploadCode` operation in
   the [Router Contract](/docs/glossary.md#router-contract). This informs the Gear.exe network of the program’s
   existence. (see more in “Router Contract” section below)
3. **Event Emission**: The Router Contract emits an event, prompting Gear.exe nodes to retrieve the blob from Ethereum’s
   archive nodes.
4. **Verification**: Executor nodes validate the blob to ensure it adheres to Gear Protocol’s standards and qualifies as
   a Gear program.
5. **Approval and Registration**: Once verified, the program is approved and registered within the Gear.exe network.
   Executor nodes store the WASM code ready for future executions.

This rigorous process ensures the security and integrity of all Gear programs. The one-time upload and registration
mechanism simplifies the workflow for developers, enabling seamless program reuse across multiple dApp interactions.

## Router Contract

The Router Contract, written in Solidity, serves as the primary interface between Ethereum and Gear.exe. This contract
plays a pivotal role in bridging off-chain computations with Ethereum’s on-chain infrastructure. Written in Solidity,
the Router Contract ensures seamless coordination across the network.
Key functions of the Router Contract include:

- **Program Management**: Developers can upload and manage WASM programs for execution within Gear.exe.
- **Result Handling**: The Router Contract receives execution outcomes from the
  Gear.exe [Sequencer](/docs/glossary.md#sequencer) and updates the state transitions for
  associated [Mirror Contracts](/docs/glossary.md#mirror-contract). (see more in “Mirror Contract” below)
- **Public Key Storage**: The contract maintains public keys for all Executor nodes in the Gear.exe network, ensuring
  secure communication and authentication.

The Router Contract is a central component, deployed once for the entire Gear.exe ecosystem, ensuring a single
coordination point within Ethereum.

## Mirror Contract

For every uploaded Gear program, a corresponding Mirror Contract is automatically deployed on Ethereum. This contract
acts as the primary interface between the on-chain and off-chain environments, enabling smooth interaction between
Gear.exe and Ethereum-based components. The deployment of Mirror Contracts for each Gear program ensures modularity and
scalability.
Mirror Contracts handle three primary tasks:

- **Initiating Requests**: They emit events that trigger the execution of WASM programs within the Gear.exe network.
- **Receiving Results**: Mirror Contracts receive execution results from the Router Contract and relay them to other
  Ethereum-based smart contracts or dApps.
- **Enhanced Readability**: When paired with Decoder Contracts, they can translate execution results into human-readable
  formats compatible with tools like Etherscan.

## Decoder Contract (Optional)

Decoder Contracts are optional but highly useful for developers who require additional functionality in interpreting
program messages. These contracts encode and decode data, making the interaction between Gear programs and
Ethereum-based tools more accessible.

- **Encoding**: Converts input payloads into the SCALE Codec format, enabling Gear programs to process data efficiently.
- **Decoding**: Translates output data from Wasm programs into Ethereum’s ABI format, making the results readable and
  actionable within Ethereum’s ecosystem.
  While Decoder Contracts add a layer of convenience, they also incur additional gas costs. Developers must weigh the
  trade-offs between usability and cost-efficiency when deciding whether to implement them.

## Executors

Executors are the backbone of the Gear.exe network, functioning as decentralized nodes that execute Wasm programs. These
nodes ensure the seamless operation of Gear.exe by maintaining redundancy, decentralization, and real-time computational
capabilities. Unlike traditional blockchain nodes, Executors operate without
a [shared storage](/docs/glossary.md#shared-storage) root, focusing entirely on program execution and result validation.
The responsibilities of Executors include:

- **Event Detection**: Executors monitor events emitted by Router and Mirror Contracts on Ethereum. These events signal
  the need to retrieve and execute specific Wasm programs stored in the Gear.exe network.
- **Program Execution**: Upon detecting a valid event, Executors fetch the corresponding program, execute its logic, and
  produce results. These computations leverage Gear Protocol’s Wasm runtime, ensuring high performance and flexibility.
- **Result Validation**: After executing the program, Executors sign the results to confirm their validity. The signed
  results are then forwarded to the Sequencer for aggregation.
- **Decentralized Coordination**: Executors communicate through a peer-to-peer (P2P) network, ensuring fault tolerance
  and redundancy across the Gear.exe ecosystem.

Executors are selected through [Symbiotic Protocol](/docs/glossary.md#symbiotic-protocol)’s restaking mechanism, which
aligns economic incentives with performance and reliability. Misbehavior, such as producing inaccurate results, is
deterred by a robust slashing mechanism that reduces the offending Executor’s stake. This economic accountability
ensures that the network remains secure and trustworthy.

## Sequencer

The Sequencer plays a critical role in the Gear.exe network by aggregating execution results and ensuring their
synchronization with Ethereum’s blockchain. While Executors handle program execution, the Sequencer ensures that the
results are efficiently batched and submitted to Ethereum.

Key functions of the Sequencer include:

- **Result Aggregation**: The Sequencer collects signed outputs and their corresponding state root hashes from multiple
  Executors. This aggregation process minimizes the data submitted to Ethereum, reducing transaction costs.
- **Batch Submission**: After collecting the results, the Sequencer compiles them into a batch transaction and sends
  them to the Router Contract on Ethereum.
- **Fee Coverage**: The Sequencer covers the Ethereum transaction fees associated with submitting batch results.

The Sequencer does not need to be part of the Gear.exe node network. Any machine can act as a Sequencer. By separating
execution and aggregation roles, Gear.exe optimizes its computational workflow while maintaining scalability and
security.
