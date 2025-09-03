---
title: Introduction
sidebar_position: 2
---

## Overview of Gear.exe

Gear.exe is a groundbreaking decentralized compute network designed to significantly enhance the computational capabilities of Layer-1 blockchain networks, starting with Ethereum. Unlike conventional Layer-2 solutions, Gear.exe introduces a transformative approach to decentralized application (dApp) architecture. It provides a real-time, high-performance, parallel execution environment with near-zero gas fees and a pre-confirmation mechanism for instant user feedback — while canonical finality remains unchanged and fully aligned with Ethereum’s native finality. Gear.exe integrates with the familiar Ethereum toolchain — such as MetaMask, Etherscan, Hardhat, and Tenderly — enabled by technologies like [Sails](https://github.com/gear-tech/sails) that expose typed interfaces and simplify integration.

The mission of Gear.exe is to enable developers to build scalable, efficient, feature-rich, and user-friendly dApps. As a
real-time co-processor working alongside Ethereum, Gear.exe enhances computational power without causing liquidity fragmentation or requiring asset bridges. By maintaining Ethereum’s robust security and liquidity, it empowers developers to create
applications with Web2-level user experiences while utilizing the unique advantages of blockchain technology.

Each program in Gear.exe maintains its own isolated state, message queue, and execution context — effectively acting as an independent compute unit. Programs are executed on-demand across a decentralized network of [Executor](/docs/glossary.md#executor) nodes, with no shared memory or global storage between them. As a result, each program can be naturally viewed as its own “individual rollup.” Collectively, these programs form a highly parallelizable compute layer — a “swarm of rollups” — enabling Gear.exe to achieve massive horizontal scalability. This architecture allows multiple programs to execute simultaneously without data contention or coordination overhead, providing developers with unprecedented flexibility to implement resource-intensive logic at scale without sacrificing performance or composability.

For developers, the process begins with identifying the most computationally intensive parts of their application’s business logic. These components are extracted from [Solidity](/docs/glossary.md#solidity)-based smart contracts and reimplemented as [WebAssembly (WASM)](/docs/glossary.md#wasm-webassembly) programs executed off-chain by Gear.exe. These programs can then be invoked as needed, radically reducing operational complexity and gas-related costs.

This approach is particularly attractive for existing applications constrained by Ethereum’s resource limits, as well as for projects that were previously impractical to launch due to high execution costs or performance bottlenecks that degrade the user experience.
