# PokéDex AI – Hybrid RAG & Recommendation System

## Overview

PokéDex AI is an AI-powered Pokémon assistant that combines Retrieval-Augmented Generation (RAG), semantic search, and recommendation techniques to provide accurate, context-aware answers about Generation I Pokémon.

Unlike traditional chatbots that rely solely on a language model's internal knowledge, PokéDex AI retrieves relevant Pokémon information from a vector database before generating responses. This improves answer quality, reduces hallucinations, and demonstrates how modern AI applications integrate retrieval systems with large language models.

The project was built to gain practical experience with RAG architecture, vector databases, embeddings, FastAPI, and local LLM deployment.

---

# Motivation

Large Language Models are powerful but often generate incorrect or outdated information when they rely only on their internal knowledge.

I wanted to understand how modern AI systems improve response quality by combining semantic retrieval with language models.

Instead of building a generic chatbot, I chose the Pokémon domain because it provides structured data, diverse entity relationships, and an engaging way to experiment with Retrieval-Augmented Generation.

---

# Problem Statement

Traditional AI chatbots have several limitations:

- They may hallucinate facts.
- They cannot reliably answer domain-specific questions.
- Keyword search often misses relevant information.
- Recommendations are limited without semantic understanding.

The challenge was to build an assistant capable of retrieving relevant Pokémon knowledge before generating responses.

---

# Solution

PokéDex AI follows a Hybrid Retrieval-Augmented Generation (RAG) architecture.

Instead of directly asking the language model to answer a question:

1. User submits a query.
2. The query is converted into an embedding.
3. Semantic search retrieves the most relevant Pokémon documents.
4. Retrieved context is added to the prompt.
5. The local language model generates the final response.

This approach grounds responses using real data rather than relying entirely on the LLM's internal knowledge.

---

# Dataset

Data Source:

PokéAPI

Scope:

Generation I Pokémon (1–151)

The project uses structured Pokémon data including:

- Base statistics
- Types
- Abilities
- Evolution chains
- Species information
- Descriptions

The raw API responses were cleaned, transformed, and converted into documents suitable for vector search.

---

# Core Features

- Hybrid Retrieval-Augmented Generation (RAG)
- Semantic similarity search
- Vector database using ChromaDB
- Sentence Transformer embeddings
- Context-aware question answering
- Pokémon recommendation system
- Local LLM inference using Ollama
- REST API built with FastAPI
- Interactive Gradio interface

---

# System Architecture

The application follows a modular AI pipeline.

User Query

↓

FastAPI API

↓

SentenceTransformer Embedding

↓

ChromaDB Semantic Search

↓

Top-K Relevant Documents

↓

Prompt Construction

↓

Ollama (Llama 3)

↓

Generated Response

↓

Frontend Display

This architecture separates retrieval from generation, making the system easier to maintain and extend.

---

# AI Components

## Embedding Model

SentenceTransformers

Model:

all-MiniLM-L6-v2

Used to convert both Pokémon documents and user queries into dense vector representations for semantic search.

---

## Vector Database

ChromaDB

Responsibilities:

- Store embeddings
- Perform similarity search
- Return Top-K relevant documents
- Support Retrieval-Augmented Generation

---

## Language Model

Ollama

Model:

Llama 3

Responsibilities:

- Generate responses
- Use retrieved context
- Produce natural language answers
- Minimize hallucinations

---

## Framework

LangChain

Used for:

- Prompt management
- Retrieval workflow
- LLM interaction
- Pipeline organization

---

# Recommendation System

In addition to question answering, the project includes a recommendation system that suggests Pokémon based on user preferences and Pokémon characteristics.

This demonstrates how semantic retrieval can support recommendation tasks beyond traditional chatbot interactions.

---

# Technologies Used

Programming Language

- Python

Backend

- FastAPI

Frontend

- Gradio

AI Frameworks

- LangChain

Vector Database

- ChromaDB

Embedding Model

- SentenceTransformers

Language Model

- Ollama (Llama 3)

Data Processing

- Pandas

Deployment

- Local AI Stack

---

# Engineering Decisions

## Why RAG?

RAG reduces hallucinations by grounding the language model with retrieved context before response generation.

---

## Why ChromaDB?

ChromaDB is lightweight, easy to integrate, and well suited for experimenting with vector search in local AI applications.

---

## Why SentenceTransformers?

SentenceTransformers produce high-quality semantic embeddings while remaining computationally efficient for local deployment.

---

## Why Ollama?

Running the LLM locally provides complete control over inference while eliminating dependency on external APIs.

---

## Why FastAPI?

FastAPI provides a modern, high-performance framework for exposing AI functionality through REST APIs.

---

# Challenges

One of the primary challenges was designing a retrieval pipeline that consistently returned relevant Pokémon information.

This required experimenting with document preparation, embedding generation, and retrieval strategies to improve semantic search quality.

Another challenge was constructing prompts that effectively combined retrieved context with user queries while keeping responses concise and accurate.

---

# Results

Successfully developed a complete end-to-end Retrieval-Augmented Generation application capable of:

- Answering Pokémon-related questions
- Performing semantic document retrieval
- Generating context-aware responses
- Providing Pokémon recommendations
- Running entirely on a local AI stack

The project demonstrates practical implementation of modern Generative AI concepts rather than simply consuming LLM APIs.

---

# Skills Demonstrated

Retrieval-Augmented Generation (RAG)

Generative AI

Semantic Search

Prompt Engineering

Vector Databases

Embeddings

Large Language Models

FastAPI

REST APIs

LangChain

ChromaDB

Python

Backend Development

System Design

AI Application Development

---

# What I Learned

Through this project I gained hands-on experience with:

- Designing Retrieval-Augmented Generation pipelines
- Working with vector databases
- Embedding generation
- Prompt engineering
- Local LLM deployment
- Semantic search
- AI system architecture
- Building production-style AI APIs

---

# Future Improvements

Potential enhancements include:

- Multi-turn conversational memory
- Hybrid keyword + semantic retrieval
- Metadata filtering
- Re-ranking retrieved documents
- Support for all Pokémon generations
- Streaming LLM responses
- Authentication and user history
- Cloud deployment
- Evaluation metrics for retrieval quality

---

# GitHub Repository

https://github.com/saichetanreddy07/pokedex-ai-rag

---

# Live Demo

Not currently deployed.

---

# Portfolio Notes

This project should be presented as an end-to-end Generative AI application rather than a Pokémon chatbot.

When showcasing the project, emphasize:

- RAG Architecture
- Semantic Search
- Embeddings
- Vector Database
- FastAPI Backend
- Local LLM Deployment
- Engineering Decisions
- AI System Design

Recruiters should immediately recognize this as a practical implementation of modern Generative AI concepts.