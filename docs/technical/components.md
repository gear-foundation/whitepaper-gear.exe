---
title: Core Components
sidebar_position: 1
---

Vara.eth redefines decentralized computation by operating as a P2P compute network rather than a standalone blockchain.  
It eliminates the need to produce its own blocks or maintain a shared state, focusing solely on efficient and reliable  
off-chain computation.  
Vara.eth relies on several key components that enable its interaction with the Ethereum ecosystem and execution of  
WASM-based programs. These components work together to provide a seamless, scalable, and efficient computational layer.

## Gear Programs

Vara.eth programs are developed as WASM modules using the [Gear Protocol](https://gear-tech.io/) framework, similar  
to [Vara](https://vara.network/) programs. These programs enable developers to implement arbitrary logic tailored to  
their applications.

Programs are uploaded to Ethereum as "[blobs](/docs/glossary.md#blob)" — a form of data stored outside  
Ethereum's main state but accessible through [archive nodes](/docs/glossary.md#archive-node). This mechanism ensures  
that large datasets can be efficiently stored without burdening the Ethereum network's main state.  
Each Gear program can allocate up to 2GB memory, allowing for the execution of highly complex computations, a capacity  
that far exceeds the stricter memory constraints of Ethereum, Optimistic Rollups, Based Rollups, and ZK Rollups. Once  
uploaded and verified, the program becomes available for execution within the Vara.eth network.

This one-time upload and registration mechanism ensures the security and integrity of all Gear programs while simplifying  
the workflow for developers, enabling seamless program reuse across multiple dApp interactions.

## Router Contract

The Router Contract, written in Solidity, serves as the primary interface between Ethereum and Vara.eth. This contract  
plays a pivotal role in bridging off-chain computations with Ethereum's on-chain infrastructure.  
Key functions of the Router Contract include:

- **Program Management**: Developers can upload and manage WASM programs for execution within Vara.eth.
- **Result Handling**: The Router Contract finalizes validator-signed execution batches and applies state updates  
  for associated Mirror Contracts.
- **Validator Coordination**: The contract maintains validator keys and activates validator sets sourced from Symbiotic.

The Router Contract is a central component, deployed once for the entire Vara.eth ecosystem, ensuring a single  
coordination point within Ethereum.

## Mirror Contract

For every uploaded Gear program, a corresponding Mirror Contract is automatically deployed on Ethereum. This contract  
acts as the primary interface between the on-chain and off-chain environments, enabling smooth interaction between  
Vara.eth and Ethereum-based components. The deployment of Mirror Contracts for each Gear program ensures modularity and  
scalability.  
Mirror Contracts handle three primary tasks:

- **Initiating Requests**: They emit events that trigger the execution of WASM programs within the Vara.eth network.
- **Receiving Results**: Mirror Contracts receive execution results from the Router Contract and relay them to other  
  Ethereum-based smart contracts or dApps.
- **Typed Interfaces**: Mirror Contracts now expose typed ABI interfaces (via Sails), allowing program inputs and outputs  
  to be interpreted natively. This design fully replaces the older Decoder Contract model, making Mirrors the default and  
  universal interface layer.

## Executors

Executors are the backbone of the Vara.eth network, functioning as decentralized nodes that execute Wasm programs. These  
nodes ensure the seamless operation of Vara.eth by maintaining redundancy, decentralization, and real-time computational  
capabilities. Unlike traditional blockchain nodes, Executors operate without a  
[shared storage](/docs/glossary.md#shared-storage) root, focusing entirely on program execution and result validation.  
The responsibilities of Executors include:

- **Event Detection**: Executors monitor events emitted by Router and Mirror Contracts on Ethereum. These events signal  
  the need to retrieve and execute specific Wasm programs stored in the Vara.eth network.
- **Program Execution**: Upon detecting a valid event, Executors fetch the corresponding program, execute its logic, and  
  produce results. These computations leverage Gear Protocol's Wasm runtime, ensuring high performance and flexibility.
- **Result Signing**: Executors sign computation results, which are then aggregated and finalized through the Router.
- **Peer Coordination**: Executors communicate through a peer-to-peer (P2P) network, ensuring fault tolerance  
  and redundancy across the Vara.eth ecosystem.

Executors are selected through [Symbiotic Protocol](/docs/glossary.md#symbiotic-protocol)'s restaking mechanism, which  
aligns economic incentives with performance and reliability. Misbehavior, such as producing inaccurate results, is  
deterred by a robust slashing mechanism that reduces the offending Executor's stake. This economic accountability  
ensures that the network remains secure and trustworthy. Executors can also provide **pre-confirmations** — off-chain  
attestations that give users immediate feedback before final settlement on Ethereum.

## Middleware

Middleware connects Vara.eth to the [Symbiotic restaking](/docs/glossary.md#symbiotic-protocol) protocol, ensuring that technical execution is backed by economic  
security. It manages operator registration, validator elections, reward routing, and slashing enforcement. By aligning  
operators and stakers with transparent incentives, Middleware guarantees both accountability and resilience of the  
network.

In practice, Middleware coordinates the flow of value and responsibility:

- **Operator Lifecycle**: registering operators (executor nodes), tracking their performance, and enabling or disabling  
  them within the network.
- **Validator Elections**: selecting and rotating validator sets based on restaked collateral, ensuring fairness and  
  continuity of security.
- **Rewards Distribution**: routing rewards both to node operators for their work and to stakers who provide collateral.
- **Slashing and Discipline**: enforcing penalties for misbehavior or downtime, preserving the integrity of execution.

By combining these roles, Middleware acts as the economic backbone of Vara.eth — making sure that every off-chain  
computation is not only technically correct but also economically secured and accountable.
