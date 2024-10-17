# Use the official Microsoft Ubuntu 24.04 image as a base
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-24.04

# Docker CLI build argument
ARG ENABLE_DOCKER=false

# Connect the container image to the GitHub repository
LABEL org.opencontainers.image.source=https://github.com/catosplace-devcontainers/engineering-base

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && apt-get autoremove -y  \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Docker CLI
# Use the build argument to conditionally install the Docker CLI
RUN if [ "$ENABLE_DOCKER" = "true" ]; then \
    echo "Docker will be enabled"; \
    apt-get update && \
    apt-get install -y ca-certificates curl gnupg && \
    install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt-get update && \
    apt-get install -y docker-ce-cli && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
    else \
      echo "Docker will not be enabled"; \
    fi

# Clone the adr-tools repository
RUN git clone https://github.com/npryce/adr-tools.git /opt/adr-tools

# Add adr-tools to the PATH
ENV PATH="/opt/adr-tools/src:${PATH}"

# Set the default shell to bash
SHELL ["/bin/bash", "-c"]