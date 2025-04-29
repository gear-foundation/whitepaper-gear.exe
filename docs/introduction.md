---
title: Introduction
sidebar_position: 2
---

## Overview of Gear.exe

Gear.exe is a groundbreaking decentralized compute network designed to significantly enhance the computational
capabilities of Layer-1 blockchain networks, starting with Ethereum. Unlike conventional Layer-2 solutions, Gear.exe
introduces a transformative approach to decentralized applications (dApps) architecture. It provides a real-time,
high-performance, parallel execution environment with near-zero gas fees, instant finalization, and seamless integration
with Ethereum’s existing infrastructure and tools, such as MetaMask and Etherscan.

The mission of Gear.exe is to enable developers to build scalable, efficient, feature rich and user-friendly dApps. As a
real-time co-processor working alongside Ethereum, Gear.exe enhances computational power without causing fragmentation
or requiring asset bridges. By maintaining Ethereum’s robust security and liquidity, it empowers developers to create
applications with Web2-level user experiences while utilizing the unique advantages of blockchain technology.

Each program in Gear.exe can be considered its own individual rollup. Collectively, the programs running
on [Executor](/docs/glossary.md#executor) nodes form a “swarm of rollups.” This architecture allows Gear.exe to deliver
unparalleled flexibility and scalability, giving developers the tools they need to implement resource-intensive logic
without sacrificing performance.

For developers, the process begins with identifying the computationally intensive parts of their application’s business
logic. These tasks are extracted from [Solidity](/docs/glossary.md#solidity)-based smart contracts and reimplemented
as [WebAassembly (WASM)](/docs/glossary.md#wasm-webassembly) programs on Gear.exe. Developers can then call these
programs as needed, radically reducing the cost and complexity of their operations.

This approach is particularly appealing for existing applications burdened by high gas fees, as well as for projects
that have been delayed to be developed on Ethereum or abandoned due to economic constraints or performance limitations
that negatively affect the user experience.
