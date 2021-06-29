- [Developer Guide](#developer-guide)
  - [Forking and Cloning](#forking-and-cloning)
  - [Install Prerequisites](#install-prerequisites)
    - [Node and npm](#node-and-npm)
  - [Building](#building)
  - [Using IntelliJ IDEA](#using-intellij-idea)
  - [Submitting Changes](#submitting-changes)

## Developer Guide

So you want to contribute code to this project? Excellent! We're glad you're here. Here's what you need to do.

### Forking and Cloning

Fork this repository on GitHub, and clone locally with `git clone`.

### Install Prerequisites

#### Node and npm

OpenSearch Perftop uses Node 10 at a minimum (version >= v10.0 < v11.0). This means you must have correct node version installed.

### Building

To build from the command line, use `./gradlew`.

```
./gradlew clean
./gradlew build -Dbuild.linux={true/false} -Dbuild.macos={true/false}
```

### Using IntelliJ IDEA

Launch Intellij IDEA, choose **Import Project**, and select the `build.gradle` file in the root of this package. 

### Submitting Changes

See [CONTRIBUTING](CONTRIBUTING.md).