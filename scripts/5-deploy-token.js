import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xe9d0Fe02799332F64e37779208897d5374A3D401");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "UniversityDAO Governance Token",
            symbol: "UNIVERSITY",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();