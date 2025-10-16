---
title: Ethereum dApps Integration
sidebar_position: 2
---

# Integration of Ethereum dApps with Vara.eth

## Methods

Vara.eth offers two distinct methods for integrating Ethereum dApps, allowing developers to choose the approach that
best suits their application's requirements.

The first method, **Event-Based Integration**, relies on Ethereum smart contracts emitting events to request off-chain
computations. These events are detected by Executors within the Vara.eth network, triggering the execution of the
specified Wasm program. Once the computation is complete, the results are sent back to Ethereum through the Mirror
Contract. This approach ensures a decentralized interaction between Ethereum and Vara.eth, maintaining the security and
integrity of the process.

The second method, **Native Integration**, allows dApps to directly interact with their Gear programs via Remote
Procedure Call (RPC). Unlike the event-based approach, native integration bypasses the need for Ethereum events,
enabling real-time interactions with the Vara.eth network. This method is particularly advantageous for applications
that require immediate results, as it leverages Vara.eth's pre-confirmation mechanism to provide outputs instantly.

Both integration methods are designed to be developer-friendly and scalable, ensuring that dApps can seamlessly
incorporate Vara.eth's computational power without compromising security or performance.

![Integration](/img/integration.png)
_This diagram illustrates native integration of an Ethereum-based dApp with Vara.eth_

## Brief Workflow for dApp Developers

1. **Define the Computationally Intensive Part.** Identify the resource-heavy segment of your dApp's business logic and
   rewrite it in Rust using Gear Protocol's Sails library. Compile the program into a Wasm module and generate an IDL (
   Interface Definition Language) file to describe its interface.
2. **Upload Your Wasm to Ethereum.** Publish your Wasm code as part of a special blob-carrying transaction (EIP-4844). The blob is stored outside Ethereum's main state, but remains accessible via archive nodes. The blob serves as the canonical source of your program's code for Vara.eth initialization.
3. **Initialize Your Program in Vara.eth.** With a single action, activate your Wasm program on Vara.eth. This
   initialization process uploads the code to Vara.eth, establishes the program's initial state, and automatically
   deploys a corresponding Mirror Contract on Ethereum. The Mirror Contract serves as the ABI-compatible interface, representing your
   dApp within the Ethereum ecosystem and facilitating seamless interaction between the two environments.
4. **Leverage Lightning-Fast Computation.** Interact with your program by submitting messages through Ethereum, paying
   only the transaction fee for message submission. Alternatively, use the RPC interface to access your dApp's
   functionality directly without incurring additional costs.
5. **Finalization and Real-Time Availability.** Once your transaction is included in an Ethereum block, the computation
   is finalized and made available according to Ethereum's native finality mechanism. However, Vara.eth's
   pre-confirmation mechanism allows your dApp to utilize the results of computations instantly, even before the
   transaction is finalized on-chain. This feature ensures a near-instantaneous response time, bridging the gap between
   blockchain finality and real-time interaction.

Uploading programs and interacting with them is quite simple thanks to the developer-friendly tools provided by
Vara.eth. Through the [Gear IDEA](https://idea.gear-tech.io/), anyone can easily integrate their Ethereum application
with efficient computations on Vara.eth, upload a program, read its state, send a message, and much more.
