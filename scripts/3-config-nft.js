import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x87337E52e96CE1134E5469c7BB696F9f314A46c4",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Fresh",
                description: "This NFT will give you access to UniversityDAO!",
                image: readFileSync("scripts/assets/fresh.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()
