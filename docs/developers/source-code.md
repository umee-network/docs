# Build and Test UX Source Code
 
1. Clone the Umee repository using the following command:
    ```
    # you will find LATEST_RELEASE_TAG on releases page https://github.com/umee-network/umee/releases
    $ git clone --depth 1 --branch <LATEST_RELEASE_TAG> https://github.com/umee-network/umee.git
    ```
2. Navigate to the Umee directory and run the installation command:
    ```
    $ cd umee && make install
    ```
3. Verify the Umee version to ensure successful installation:
    ```
    $ umeed version
    ```

Or follow the [validator instructions](../validators/installing-UX-node.md)
