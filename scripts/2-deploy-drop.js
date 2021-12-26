import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xe9d0Fe02799332F64e37779208897d5374A3D401");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "UniversityDAO Membership",
            description: "A DAO for the first decentralized university",
            image: readFileSync("scripts/assets/university.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()