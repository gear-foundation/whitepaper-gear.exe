---
title: Key Features and Advantages
sidebar_position: 4
---

# Key Features and Advantages

Vara.eth offers a suite of features that address the scalability and usability challenges faced by existing blockchain
solutions. These features are designed to empower developers and enhance the user experience, making Vara.eth a powerful
tool for modern dApp development.

## Seamless Integration with Ethereum

Vara.eth network is fully integrated with Ethereum and operates directly with native Ethereum's smart contracts. This
compatibility ensures that developers can adopt Vara.eth without needing additional tokens, interfaces, or complex
configurations. Users and developers can keep using Ethereum's existing tools and infrastructure they are familiar with
for developing and interacting with Solidity-based smart contracts, including MetaMask, Etherscan, popular developer
frameworks, environments, debugging tools, IDEs (Thirdweb, Tenderly, The Graph etc). Interaction with Vara.eth programs does not require custom ABI encoding/decoding — thanks to [Sails](https://github.com/gear-tech/sails), developers can call programs directly using familiar Ethereum tools.

Every interaction with Ethereum users and liquidity happens directly—no bridges, no wrapped tokens, no fragmented liquidity pools. Vara.eth lives within Ethereum's ecosystem, not beside it.

## Parallel Execution

Vara.eth's architecture inherently supports parallel execution of programs, leveraging multiple CPUs to handle
computational workloads efficiently. This capability allows developers to distribute tasks across several threads,
enabling faster processing for applications like AI models, financial simulations, and complex gaming logic. By
optimizing workloads for parallel execution, Vara.eth significantly boosts throughput and reduces bottlenecks, ensuring
that even the most demanding applications can operate seamlessly.

Programs are inherently isolated and can run in parallel across executors. Additionally, developers can design their logic to further distribute workloads across multiple programs, enabling natural horizontal scaling.

## Advanced Programming Environment

Vara.eth provides developers with a cutting-edge programming environment by combining the power of WebAssembly (Wasm)
with the flexibility of Rust, a widely adopted and developer-friendly language. Wasm programs on Vara.eth enable
high-performance, lightweight execution, while Rust's rich ecosystem and safety features make it easier to write, test,
and maintain complex applications. Additionally, Vara.eth supports up to 2GB of memory per program (current limit), significantly exceeding Ethereum's gas-constrained execution where effective memory rarely exceeds a few MB.
This combination empowers developers to create larger, more sophisticated applications, such as financial simulations, AI models, and real-time gaming systems, without being hindered by traditional blockchain limitations.

## Reverse Gas Model and Flexible Gas Management

Besides the fact that Vara.eth minimizes the costs associated with decentralized computation by offloading
resource-intensive tasks to its network, it also introduces a Reverse Gas model, shifting the cost of execution from
users to the program itself. This approach ensures a seamless and accessible user experience, enabling broader adoption
of decentralized applications (dApps).

![Reverse gas](/img/reverse-gas.png)
_Gas Fees and Reverse Gas Model_

In Vara.eth, programs maintain two types of balances:

- Executable Balance: Dedicated solely to program execution. If this balance is depleted, the program cannot process new
  messages until replenished.
- Free Balance: Acts as a general-purpose wallet for funds earned by the program, which can be withdrawn or converted
  into Executable Balance if supported by the program logic.

This model allows anyone to send messages without incurring extra compute costs beyond the base Ethereum transaction fee.
The Executable Balance is consumed during execution, while funds are distributed to
the network's Executors as rewards. Developers can design applications that fund their Executable Balance through
revenue models like user payments, fees, or even sponsorships.

The reverse gas model enhances accessibility and usability, eliminating user-side complexity while promoting scalability
and efficiency for dApp creators. This makes Vara.eth particularly suited for applications that prioritize user adoption
and real-time responsiveness, such as financial services, gaming platforms, and enterprise solutions.

## Real-Time Computation Result and Pre-confirmations

For latency-sensitive applications, Vara.eth introduces its own technical implementation of
a [well-known](https://ethresear.ch/t/based-preconfirmations/17353) [pre-confirmation mechanism](/docs/glossary.md#pre-confirmation-mechanism).
This feature allows developers to access computation results immediately after execution, even before the transaction is
finalized on-chain. Modern consensus techniques enable sub-second pre-confirmations validated by Vara.eth operators, with final settlement anchored on Ethereum. By bridging the gap between decentralized security and Web2-like responsiveness, this capability enables the development of cutting-edge applications in finance, competitive gaming, and other industries. Pre-confirmations provide early results for UX, while canonical finality still follows Ethereum's finality rules.

## No Own Blocks

Unlike traditional Layer 2 solutions such as Arbitrum and Optimism, which generate and store their own blocks, Vara.eth
does not create blocks. Instead, it processes transactions and program state changes directly within its network,
leveraging its decentralized compute architecture. Rather than producing blocks, Vara.eth checkpoints batched program state changes to Ethereum, ensuring security while avoiding L2-style block overhead.
By avoiding block creation, Vara.eth eliminates the overhead
associated with block production and consensus mechanisms, reduces latency, and enables real-time computation. This
design enhances scalability and allows for more efficient resource utilization, making it ideal for applications
requiring instant feedback and high computational throughput.

// TODO (Eugene Way)
// chain-agnostic and scalability options feature
